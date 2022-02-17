import React from 'react';
import * as yup from 'yup';
import { Button } from '@whammytechvn/wt-components';
import { FormInputField } from 'components/input/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

const schema = yup
  .object({
    email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  })
  .required();

export default function FormCreateGameProfile() {
  const methods = useForm({ resolver: yupResolver(schema) });

  const {
    formState: { errors },
    handleSubmit
  } = methods;

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-8">
        <FormInputField fullWidth name="email" label="Email" placeholder="Email" type="email" errors={errors} />
        <FormInputField
          fullWidth
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          errors={errors}
          helperText="Password should contain both letter and number, with minimum length of 8 characters"
        />
        <Button type="submit" className="w-2/3 py-6" color="primary" content="Create Account" />
      </form>
    </FormProvider>
  );
}
