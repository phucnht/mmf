import { Button, Flex, Heading, Stack, Text } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { FormProvider, useForm } from 'react-hook-form';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';
import imgBlank from 'public/assets/default/img-blank.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/input/InputField';
import { clientMarket } from 'utils/api';
import { web3 } from 'utils/contract';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { toast } from 'react-toastify';
import axios from 'axios';
export interface ModalTypeListingProps {
  data?: ObjectProps;
  confirm: () => void;
  isCancel?: boolean;
}

export type FormValues = {
  price: number;
};

const ModalTypeListing = ({ data, confirm, isCancel }: ModalTypeListingProps) => {
  const { address, accessToken } = useAppSelector(selectAuthData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);
  const symbolBUSD = BUSD?.symbol || 'BUSD';

  const schema = yup.object({
    price: yup.number().integer().required('Required').positive().min(0, 'The number of boxes cannot be smaller than 0')
  });

  const methods = useForm<FormValues>({
    defaultValues: { price: 0 },
    resolver: yupResolver(schema)
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ price }: FormValues) => {
    if (isCancel) {
      const resDeleteSaleItem = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_MARKET}/sale-items/${data?.nftItemId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      if (resDeleteSaleItem) {
        confirm();
      }
    } else {
      if (price <= 0) {
        toast.error('Price must be larger than 0!');
      }
      if (data && price > 0) {
        const saltNonce = new Date().getTime();
        const paramsHashMessage = {
          nftItemId: data.nftItemId,
          paymentTokenId: BUSD.id,
          price,
          saltNonce,
          amount: 1,
          ownerAccept: true
        };

        const resHashMessage = (await clientMarket.get('/sale-items/hash-message', {
          params: paramsHashMessage
        })) as any;

        if (resHashMessage) {
          const signedSignature = await web3.eth.personal.sign(resHashMessage.hashMessage, address, '');
          const paramsCreateSaleItem = {
            nftItemId: data.nftItemId,
            signedSignature,
            paymentTokenId: BUSD.id,
            price,
            amount: 1,
            saltNonce
          };

          const resCreateSaleItem = await clientMarket.post('/sale-items/create', {
            ...paramsCreateSaleItem
          });

          if (resCreateSaleItem) {
            confirm();
          }
        }
      }
    }
  });

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Heading className="!text-[4rem] font-bold uppercase">{isCancel ? 'Cancel Listing' : 'List Item'}</Heading>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Flex className="items-center w-full p-8 gap-12">
            <Flex className="flex-col items-center justify-center w-[22.8rem] h-[22.2rem]">
              <Image alt={`#${data?.nftItemId}`} src={data?.nftItemImg || imgBlank} />
            </Flex>
            <Flex className="flex-col text-white gap-8 pl-12 max-w-[32rem]">
              <Heading className="font-bold text-lg">
                {isCancel
                  ? 'You are about to cancel your listing on marketplace. To sell this item again, you will need to relist this for sale.'
                  : `You are about to list your item on Marketplace #${data?.nftItemId}`}
              </Heading>
              {!isCancel && (
                <>
                  <Text className="text-xl">Set price:</Text>
                  <InputField isForm name="price" prefix={symbolBUSD} />
                </>
              )}
            </Flex>
          </Flex>
          <Button
            type="submit"
            className="text-red-100 py-4 min-w-[15rem] max-w-[38rem] disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none mx-auto"
            color={'secondary'}
            fullWidth
          >
            {isCancel ? 'Cancel Listing' : 'Post Your Listing'}
          </Button>
        </form>
      </FormProvider>
    </Stack>
  );
};

export default ModalTypeListing;
