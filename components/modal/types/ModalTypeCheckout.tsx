import { Button, Flex, Heading, Stack } from '@whammytechvn/wt-components';
import Alert from 'components/display/alert/Alert';
import Image from 'components/display/image/Image';
import { MouseEventHandler, useState } from 'react';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';
import imgLand from '/public/assets/items/lands/land-2.png';
import imgCharacter1 from '/public/assets/items/characters/character-1.png';
import imgClothes from '/public/assets/items/items/clothes.png';
import { marketplaceContract } from 'utils/contract';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useDispatch } from 'react-redux';

export interface ModalTypeCheckoutProps {
  data?: ObjectProps;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
  confirm: MouseEventHandler<HTMLButtonElement>;
}

const ModalTypeCheckout = ({ confirm, decline, data }: ModalTypeCheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { address } = useAppSelector(selectAuthData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);
  const { marketplaceAddress } = useAppSelector(selectSystemConfigData);
  const symbolBUSD = BUSD?.symbol || 'BUSD';
  const dispatch = useDispatch();

  const handleProcess = (e: any) => {
    setIsProcessing(true);

    marketplaceContract(marketplaceAddress).methods.matchTransaction1155().send({ from: address });
    // .once('transactionHash', function () {
    //   dispatch(showModal({ type: MODAL_TYPE.PROCESSING }));
    // })
    // .once('receipt', async function (receipt) {
    //   await getBalance(address);
    //   dispatch(showModal({ type: MODAL_TYPE.COMPLETED, data: { ...receipt, totalAmount } }));
    // })
    // .on('error', function (e) {
    //   console.error(e);
    //   dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: 'Transaction failed' } }));
    // })
    // .catch(function (e) {
    //   console.error(e);
    //   dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: 'Transaction failed' } }));
    // });
    // seasonContract(SEASON_ADDRESS)
    //   .methods.buyPackage(SEASON_CODE, tokenIds)
    //   .send({ from: address })
    //   .once('transactionHash', function () {
    //     dispatch(showModal({ type: MODAL_TYPE.PROCESSING }));
    //   })
    //   .once('receipt', async function (receipt) {
    //     await getBalance(address);
    //     dispatch(showModal({ type: MODAL_TYPE.COMPLETED, data: { ...receipt, totalAmount } }));
    //   })
    //   .on('error', function (e) {
    //     console.error(e);
    //     dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: 'Transaction failed' } }));
    //   })
    //   .catch(function (e) {
    //     console.error(e);
    //     dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: 'Transaction failed' } }));
    //   });
  };

  const infos = [
    {
      name: 'Amount:',
      value: `${data?.nftItemPrice || 200} ${symbolBUSD}`
    }
    // {
    //   name: 'Gas Fee:',
    //   value: `${data?.gasFee || 7} ${symbolBUSD}`
    // },
    // {
    //   name: 'Total Price:',
    //   value: `${data?.totalPrice || 207} ${symbolBUSD}`
    // }
  ];

  const IMAGES = {
    item: imgClothes,
    land: imgLand,
    character: imgCharacter1
  } as any;

  const imgSrc = IMAGES[data?.nftItemType];

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Heading className="!text-[4rem] font-bold uppercase">Checkout</Heading>
      <Flex className="items-center w-full p-8 gap-12">
        <Flex className="flex-col items-center w-[22.8rem] h-[22.2rem]">
          <Image alt="Buy Box" src={imgSrc} />
        </Flex>
        <Flex className="flex-col text-white gap-8 pl-12 max-w-[32rem]">
          <Heading className="uppercase font-bold text-lg">You are about to purchased #{data?.nftItemId}</Heading>
          <table className="w-full font-normal text-md table-auto border-separate">
            <tbody>
              {infos.map(({ name, value }, index) => (
                <tr key={index} className="h-12">
                  <td className="text-left">{name}</td>
                  <td className="text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Alert type="error" className="font-normal" content={'Your balance is not enough BNB'} /> */}
        </Flex>
      </Flex>
      <Stack className="items-center gap-8">
        {isProcessing ? (
          <Button
            className="text-red-100 py-4 min-w-[38rem] w-fit disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
            disabled={isProcessing}
            color={isProcessing ? 'default' : 'secondary'}
            fullWidth
          >
            Processing
          </Button>
        ) : (
          <>
            <Button color="primary" className="py-4 min-w-[15rem] w-fit" onClick={decline}>
              Cancel
            </Button>
            <Button
              className="text-red-100 py-4 min-w-[15rem] w-fit disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
              disabled={isProcessing}
              color={isProcessing ? 'default' : 'secondary'}
              onClick={handleProcess}
            >
              Checkout
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ModalTypeCheckout;
