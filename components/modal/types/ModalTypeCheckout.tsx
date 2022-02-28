import { Box, Button, Flex, Grid, Heading, Stack, Text } from '@whammytechvn/wt-components';
import Alert from 'components/display/alert/Alert';
import Image from 'components/display/image/Image';
import { MouseEventHandler, useState } from 'react';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';
import imgDashboardBox from '/public/assets/dashboard/box.png';
export interface ModalTypeCheckoutProps {
  data?: ObjectProps;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeCheckout = ({ decline, data }: ModalTypeCheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { MMF, BUSD } = useAppSelector(selectPaymentTokenData);

  const handleProcess = () => {
    setIsProcessing(true);
  };

  const infos = [
    {
      name: 'Amount:',
      value: `${data?.amount} ${BUSD.name}`
    },
    {
      name: 'Gas Fee:',
      value: `${data?.gasFee} ${BUSD.name}`
    },
    {
      name: 'Total Price:',
      value: `${data?.totalPrice} ${BUSD.name}`
    }
  ];

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Heading className="!text-[4rem] font-bold uppercase">Checkout</Heading>
      <Flex className="items-center w-full p-8 gap-12">
        <Flex className="flex-col items-center w-[22.8rem] h-[22.2rem]">
          <Image alt="Buy Box" src={imgDashboardBox} />
        </Flex>
        <Flex className="flex-col text-white gap-8 pl-12">
          <Heading className="uppercase font-black text-lg">You are about to purchased #{data?.id}</Heading>
          <table className={'w-full text-md'}>
            <tbody>
              {infos.map(({ name, value }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td className="text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Flex>
      </Flex>
      <Stack className="items-center gap-8">
        <Button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={decline}
        >
          Cancel
        </Button>
        <Button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleProcess}
        >
          Checkout
        </Button>
      </Stack>
    </Stack>
  );
};

export default ModalTypeCheckout;
