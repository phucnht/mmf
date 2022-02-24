import { Button } from '@whammytechvn/wt-components';
import Alert from 'components/display/alert/Alert';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormBuyBoxProps {
  amount: number;
}

export default function FormBuyBox({ amount }: FormBuyBoxProps) {
  const method = useForm({
    defaultValues: { amount }
  });

  return (
    <FormProvider {...method}>
      <Alert type="error" content={'Your balance is not enough BNB'} />
      <Button color="secondary" className="text-red-100 p-8 w-fit text-xl" content={`Purchase ${amount} BNB`} />
    </FormProvider>
  );
}
