import { yupResolver } from '@hookform/resolvers/yup';
import InputNumber from 'components/input/InputNumber';
import { FormProvider, useForm } from 'react-hook-form';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';
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
  const { accessToken } = useAppSelector(selectAuthData);

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
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <InputNumber name="amount" showMax />
        {methods.formState.errors['amount'] && <Alert type="error" content={'Your balance is not enough BNB'} />}
        <FormBuyBoxButton name="amount" price={MOCK_PRICE} min={0} max={MOCK_LIMIT_PER_TRANSACTION} />
      </form>
    </FormProvider>
  );
}
