import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { erc20Contract, plgMarketplaceContract, MAX_INT, web3 } from 'utils/contract';
import { ObjectProps } from 'utils/types';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useEffect, useState } from 'react';
import { getPolygonFee } from 'utils/networks';

export interface FormBuyNowButtonProps {
  item: ObjectProps;
}

export default function FormBuyNowButton({ item }: FormBuyNowButtonProps) {
  //   const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const { open, close, type } = useModalConfirmation();
  const { address, accessToken, balance2 } = useAppSelector(selectAuthData);
  const { marketplaceAddress, chainId: systemConfigChainId } = useAppSelector(selectSystemConfigData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const listedByMe = address === item.ownerAddress;
  const notEnoughMoney = !!address && !listedByMe && balance2 < item.price;

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

    try {
      setIsProcessing(true);

      if (listedByMe) {
        const resultCancelListing = await open({
          type: 'cancel-listing',
          size: 'fit',
          data: { ...item }
        });
        if (resultCancelListing) {
          await open({ type: 'completed', size: 'md', isClosable: false, data: { type: 'marketplace' } });
        }
      } else {
        const resultCheckout = await open({
          type: 'checkout',
          size: 'fit',
          data: { ...item }
        });
        if (resultCheckout) {
          const maxFeeForFast = (await getPolygonFee(+systemConfigChainId)) as number;

          // Approve Buyer
          const allowance = await erc20Contract(BUSD.contractAddress)
            .methods.allowance(address, marketplaceAddress)
            .call();
          const approvePrice = (item.price * 10 ** BUSD.decimals).toLocaleString('fullwide', { useGrouping: false });

          if (Number(allowance) < Number(approvePrice)) {
            await erc20Contract(BUSD.contractAddress)
              .methods.approve(marketplaceAddress, MAX_INT)
              .send({
                from: address,
                gasPrice: Math.ceil(maxFeeForFast)
              });
          }

          // Match Transaction
          const addresses = [item.ownerAddress, item.nftContract, BUSD.contractAddress];
          const values = [
            item.tokenId,
            web3.utils.toWei(`${item.price}`, 'ether'),
            item.saltNonce,
            web3.utils.toBN(`${item.amount}`).toString()
          ];
          const signature = item.signedSignature;

          // console.log(addresses, values, signature);

          plgMarketplaceContract(marketplaceAddress)
            .methods.matchTransaction1155(addresses, values, signature)
            .send({
              from: address,
              gasPrice: Math.ceil(maxFeeForFast)
            })
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
    } catch {
      //
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="text-center">
      <Button
        disabled={isProcessing || notEnoughMoney}
        color={isProcessing || notEnoughMoney ? 'default' : 'secondary'}
        className="text-red-100 max-h-24 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
        content={listedByMe ? 'Cancel listing' : 'Buy Now'}
        onClick={handleOnClick}
      />
      {notEnoughMoney && <div className="font-bold text-sm mt-3 text-red-400">Your balance is insufficient</div>}
    </div>
  );
}
