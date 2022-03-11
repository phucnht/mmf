import { Button, Flex, Heading, Stack, Text } from '@whammytechvn/wt-components';
import { FormProvider, useForm } from 'react-hook-form';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { useAppSelector } from 'store/store.hook';
import { ObjectProps } from 'utils/types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/input/InputField';
import { clientMarket } from 'utils/api';
import { web3 } from 'utils/contract';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { toast } from 'react-toastify';
import axios from 'axios';
import { validateInputNumber } from 'utils/validate';
import InputNumber from 'components/input/InputNumber';
import CustomImage from 'components/display/image/CustomImage';
export interface ModalTypeListingProps {
  data?: ObjectProps;
  confirm: () => void;
  isCancel?: boolean;
}

export type FormValues = {
  amount: number;
  price: number;
};

const ModalTypeListing = ({ data, confirm, isCancel }: ModalTypeListingProps) => {
  const { address, accessToken } = useAppSelector(selectAuthData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);
  const symbolBUSD = BUSD?.symbol || 'BUSD';

  const schema = yup.object({
    amount: yup
      .number()
      .integer()
      .required('Required')
      .positive()
      .min(0, 'The number of amount cannot be smaller than 0'),
    price: yup.number().required('Required').positive().min(0, 'The number of boxes price be smaller than 0')
  });

  const methods = useForm<FormValues>({
    defaultValues: { price: 0, amount: 1 },
    resolver: yupResolver(schema)
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ amount, price }: FormValues) => {
    if (isCancel) {
      try {
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
      } catch (e: any) {
        toast.error(e.message);
        return;
      }
    } else {
      if (amount <= 0) {
        toast.error('Amount must be larger than 0!');
        return;
      }
      if (price <= 0) {
        toast.error('Price must be larger than 0!');
        return;
      }
      if (data) {
        const saltNonce = new Date().getTime();
        const paramsHashMessage = {
          nftItemId: data.nftItemId,
          paymentTokenId: BUSD.id,
          price,
          saltNonce,
          amount,
          ownerAccept: true
        };

        const resHashMessage = (await clientMarket.get('/sale-items/hash-message', {
          params: paramsHashMessage
        })) as any;

        if (resHashMessage) {
          try {
            const signedSignature = await web3.eth.personal.sign(resHashMessage.hashMessage, address, '');
            const paramsCreateSaleItem = {
              nftItemId: data.nftItemId,
              signedSignature,
              paymentTokenId: BUSD.id,
              price,
              amount,
              saltNonce
            };

            const resCreateSaleItem = (await axios.post(
              `${process.env.NEXT_PUBLIC_API_MARKET}/sale-items/create`,
              paramsCreateSaleItem,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              }
            )) as any;

            if (resCreateSaleItem.data.success) {
              confirm();
            } else {
              toast.error(resCreateSaleItem.data.errors.error);
            }
          } catch (e: any) {
            toast.error(e.message);
            return;
          }
        }
      }
    }
  });

  const handleValidateInput = (e: any) => {
    return !validateInputNumber(e) && e.preventDefault();
  };
  const handleFocus = (e: any) => e.target.select();

  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Heading className="!text-[4rem] font-bold uppercase">{isCancel ? 'Cancel Listing' : 'List Item'}</Heading>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Flex className="items-center w-full p-8 gap-12">
            <Flex className="flex-col items-center justify-center w-[22.8rem] h-[22.2rem]">
              <CustomImage alt={`#${data?.nftItemId}`} src={data?.nftItemImg} />
            </Flex>
            <Flex className="flex-col text-white gap-8 pl-12 max-w-[32rem]">
              <Heading className="font-bold text-lg">
                {isCancel
                  ? 'You are about to cancel your listing on marketplace. To sell this item again, you will need to relist this for sale.'
                  : `You are about to list your item on Marketplace #${data?.nftItemId}`}
              </Heading>
              {!isCancel && (
                <Flex className="flex-col gap-4">
                  <Flex className="flex-col gap-2">
                    <Text className="text-xl">Set amount:</Text>
                    <InputNumber name="amount" onKeyDown={handleValidateInput} onFocus={handleFocus} />
                  </Flex>
                  <Flex className="flex-col gap-2">
                    <Text className="text-xl">Set price (all items):</Text>
                    <InputField
                      isForm
                      type="text"
                      name="price"
                      fullWidth
                      prefix={symbolBUSD}
                      onKeyDown={handleValidateInput}
                      onFocus={handleFocus}
                    />
                  </Flex>
                </Flex>
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
