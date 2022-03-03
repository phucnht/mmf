import { Button, Flex, Heading, Stack, Text } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { MouseEventHandler, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/input/InputField';

export interface ModalTypeListingProps {
  data?: ObjectProps;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
  confirm: MouseEventHandler<HTMLButtonElement>;
}

export type FormValues = {
  amount: number;
};

const ModalTypeListing = ({ confirm, decline, data }: ModalTypeListingProps) => {
  const { BUSD } = useAppSelector(selectPaymentTokenData);
  const symbolBUSD = BUSD?.symbol || 'BUSD';

  const handleListItem = (e: any) => {
    confirm(e);
  };

  const schema = yup.object({
    amount: yup.number().integer().required('Required').min(0, 'The number of boxes cannot be smaller than 0')
  });

  const methods = useForm<FormValues>({
    defaultValues: { amount: 0 },
    resolver: yupResolver(schema)
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ amount }: FormValues) => {
    // if (!(await notExceedMaxBox(address, data.amount))) {
    //   dispatch(
    //     showModal({
    //       type: MODAL_TYPE.FAILED,
    //       data: {
    //         subtitle: `You already have ${noBoxes} boxes. You are not allowed to have more than ${limitPerUser} boxes.`
    //       }
    //     })
    //   );
    //   return;
    // }
    // const totalAmount = price * data.amount;
    // if (balance < totalAmount) {
    //   dispatch(showModal({ type: MODAL_TYPE.CHECKOUT, data: { amount: totalAmount, gasFee: 0 } }));
    //   return;
    // }
    // const tokenIds = Array.from({ length: data.amount }).map(() => {
    //   return +customAlphabet('1234567890', 8)();
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
  });

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Heading className="!text-[4rem] font-bold uppercase">List Item</Heading>{' '}
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Flex className="items-center w-full p-8 gap-12">
            <Flex className="flex-col items-center justify-center w-[22.8rem] h-[22.2rem]">
              <Image alt={`#${data?.nftItemId}`} src={data?.nftItemImg} />
            </Flex>
            <Flex className="flex-col text-white gap-8 pl-12 max-w-[32rem]">
              <Heading className="font-bold text-lg">
                You are about to list your item on Marketplace #{data?.nftItemId}
              </Heading>
              <Text className="text-xl">Set price:</Text>
              <InputField isForm name="amount" prefix={symbolBUSD} />
            </Flex>
          </Flex>
          <Button
            className="text-red-100 py-4 min-w-[15rem] max-w-[38rem] disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none mx-auto"
            color={'secondary'}
            fullWidth
            onClick={handleListItem}
          >
            Post Your Listing
          </Button>
        </form>
      </FormProvider>
    </Stack>
  );
};

export default ModalTypeListing;
