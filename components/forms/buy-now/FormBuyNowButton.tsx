import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { CardItemType } from 'components/display/card/detail/CardPanelDetail';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { erc1155Contract, erc20Contract, marketplaceContract, MAX_INT, web3 } from 'utils/contract';
import { ObjectProps } from 'utils/types';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useEffect, useState } from 'react';

export interface FormBuyNowButtonProps {
  item: ObjectProps;
  nftItemType: CardItemType;
  nftItemImg?: StaticImageData;
}

export default function FormBuyNowButton({ item, nftItemType, nftItemImg }: FormBuyNowButtonProps) {
  //   const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const { open, close, type } = useModalConfirmation();
  const { address, accessToken } = useAppSelector(selectAuthData);
  const { marketplaceAddress } = useAppSelector(selectSystemConfigData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const listedByMe = address === item.ownerAddress;
  console.log(item);

  useEffect(() => {
    if (accessToken && type === 'login') close();
  }, [accessToken, close, type]);

  const handleOnClick = async () => {
    if (!accessToken) {
      const resultAuth = await open({ type: 'login', size: 'max' });

      if (!resultAuth) {
        return;
      }
    }

    if (listedByMe) {
      const resultCancelListing = await open({
        type: 'cancel-listing',
        size: 'fit',
        data: { nftItemId: item.id, nftItemOwnerAddress: item.ownerAddress, nftItemType, nftItemImg }
      });

      if (resultCancelListing) {
        await open({ type: 'completed', size: 'md', isClosable: false, data: { type: 'marketplace' } });
      }
    } else {
      const resultCheckout = await open({
        type: 'checkout',
        size: 'fit',
        data: {
          nftItemId: item.id,
          nftItemOwnerAddress: item.ownerAddress,
          nftItemType,
          nftItemPrice: item.price,
          nftItemImg
        }
      });

      if (resultCheckout) {
        // Approve Seller
        const isApprovedForAll = await erc1155Contract(item.nftContract)
          .methods.isApprovedForAll(item.ownerAddress, marketplaceAddress)
          .call();

        console.log('isApprovedForAll', item.ownerAddress, marketplaceAddress);

        if (!isApprovedForAll) {
          setIsProcessing(true);
          await erc1155Contract(item.nftContract)
            .methods.setApprovalForAll(marketplaceAddress, true)
            .send({ from: address });
          console.log('setApprovalForAll', marketplaceAddress, true);
          setIsProcessing(false);
        }

        // Approve Buyer
        const allowance = await erc20Contract(BUSD.contractAddress)
          .methods.allowance(address, marketplaceAddress)
          .call();
        const approvePrice = (item.price * 10 ** BUSD.decimals).toLocaleString('fullwide', { useGrouping: false });
        console.log('allowance', address, marketplaceAddress);
        console.log('approvePrice', approvePrice);

        if (Number(allowance) < Number(approvePrice)) {
          setIsProcessing(true);
          await erc20Contract(BUSD.contractAddress)
            .methods.approve(marketplaceAddress, MAX_INT)
            .send({ from: address });
          console.log('approve', marketplaceAddress, MAX_INT);

          setIsProcessing(false);
        }

        // Match Transaction
        const addresses = [item.ownerAddress, item.nftContract, BUSD.contractAddress];
        const values = [
          item.tokenId,
          web3.utils.toWei(`${item.price}`, 'ether'),
          item.saltNonce,
          web3.utils.toBN(`1`).toString()
        ];
        const signature = item.signedSignature;

        console.log(address, addresses, values, signature);
        console.log('buyer saltnonce: ', item.saltNonce);
        marketplaceContract(marketplaceAddress)
          .methods.matchTransaction1155(addresses, values, signature)
          .send({ from: address })
          .once('transactionHash', function () {
            open({ type: 'processing', size: 'md' });
          })
          .once('receipt', async function () {
            open({ type: 'completed', size: 'md', data: { type: 'inventory' } });
          })
          .on('error', function () {
            open({ type: 'failed' });
          })
          .catch(function (e: any) {
            console.error(e);
            open({ type: 'failed' });
          });
      }
    }
  };

  return (
    <Button
      disabled={isProcessing}
      color={isProcessing ? 'default' : 'secondary'}
      className="text-red-100 max-h-24 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
      content={listedByMe ? 'Cancel listing' : 'Buy Now'}
      onClick={handleOnClick}
    />
  );
}
