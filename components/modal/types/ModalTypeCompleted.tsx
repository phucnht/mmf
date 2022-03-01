import { Box, Button, Flex, Heading, Stack } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';
export interface ModalTypeCheckoutProps {
  data?: ObjectProps;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeCompleted = ({ data }: ModalTypeCheckoutProps) => {
  const { BUSD } = useAppSelector(selectPaymentTokenData);
  const router = useRouter();
  const symbolBUSD = BUSD?.symbol || 'BUSD';

  const infos = [
    {
      name: 'Amount:',
      value: `${data?.amount || 200} ${symbolBUSD}`
    },
    {
      name: 'Status:',
      value: 'Processing'
    },
    {
      name: 'Transaction ID:',
      value: '0sms384948989189'
    }
  ];

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full] bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Box className="text-center">
        <Heading className="!text-[4rem] font-bold uppercase text-green-200">Completed!</Heading>
        <Flex className="max-w-[36rem] flex-col items-center w-full p-8 gap-4">
          <Heading className="font-bold text-lg">
            You successfully purchased. You are about to purchase #{data?.id}
          </Heading>
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
        </Flex>
      </Box>
      <Button
        className="py-4 max-w-[38rem] font-black text-white !bg-green-200"
        color={'default'}
        onClick={() => router.push('/inventory/box')}
        fullWidth
      >
        Check my inventory
      </Button>
    </Stack>
  );
};

export default ModalTypeCompleted;
