import { yupResolver } from '@hookform/resolvers/yup';
import InputNumber from 'components/input/InputNumber';
import { FormProvider, useForm } from 'react-hook-form';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import * as yup from 'yup';
import FormBuyBoxButton from './FormBuyBoxButton';
import useModalConfirmation from 'hooks/useModal';
import Alert from 'components/display/alert/Alert';

export interface FormBuyBoxProps {
  amount: number;
}

const MOCK_PRICE = 500;
const MOCK_LIMIT_PER_TRANSACTION = 20;

export default function FormBuyBox({ amount }: FormBuyBoxProps) {
  const dispatch = useAppDispatch();
  const { address, accessToken, balance } = useAppSelector(selectAuthData);

  // Modal confirmation
  const { open } = useModalConfirmation();

  const schema = yup.object({
    amount: yup
      .number()
      .integer()
      .required('Required')
      .min(0, 'The number of boxes cannot be smaller than 0')
      .max(MOCK_LIMIT_PER_TRANSACTION, `A user can buy maximum ${MOCK_LIMIT_PER_TRANSACTION} boxes at a time.`)
  });

  const methods = useForm<FormBuyBoxProps>({
    defaultValues: { amount },
    resolver: yupResolver(schema)
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ amount }: FormBuyBoxProps) => {
    if (!accessToken) {
      const resultAuth = await open({ type: 'login', size: 'max' });

      if (!resultAuth) {
        return;
      }
    }

    const resultCheckout = await open({ type: 'checkout', size: 'fit' });

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
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <InputNumber name="amount" />
        {methods.formState.errors['amount'] && <Alert type="error" content={'Your balance is not enough BNB'} />}
        <FormBuyBoxButton name="amount" price={MOCK_PRICE} min={0} max={MOCK_LIMIT_PER_TRANSACTION} />
      </form>
    </FormProvider>
  );
}
