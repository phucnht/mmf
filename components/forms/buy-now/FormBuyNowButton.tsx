import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { CardItemType } from 'components/display/card/detail/CardPanelDetail';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { marketplaceContract, web3 } from 'utils/contract';
import { ObjectProps } from 'utils/types';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useEffect } from 'react';

export interface FormBuyNowButtonProps {
  item: ObjectProps;
  nftItemType: CardItemType;
  nftItemImg?: StaticImageData;
}

export default function FormBuyNowButton({ item, nftItemType, nftItemImg }: FormBuyNowButtonProps) {
  //   const dispatch = useAppDispatch();
  const { open, close, type } = useModalConfirmation();
  const { address, accessToken } = useAppSelector(selectAuthData);
  const { marketplaceAddress } = useAppSelector(selectSystemConfigData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const listedByMe = address === item.ownerAddress;

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
        const saltNonce = new Date().getTime();

        const addresses = [item.ownerAddress, item.nftContract, BUSD.contractAddress];
        const values = [
          item.tokenId,
          web3.utils.toWei(`${item.price}`, 'ether'),
          saltNonce,
          web3.utils.toBN(`1`).toString()
        ];
        const signature = item.signedSignature;

        console.log(address, addresses, values, signature);
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
      color="secondary"
      className="text-red-100 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl"
      content={listedByMe ? 'Cancel listing' : 'Buy Now'}
      onClick={handleOnClick}
    />
  );
}
