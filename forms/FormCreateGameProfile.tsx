import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInputField } from 'components/input/InputField';
import { Button, Text } from '@whammytechvn/wt-components';

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
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex gap-6">
        <FormInputField
          inputProps={{ className: '!w-full' }}
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          errors={errors}
          className="w-full"
        />
        <FormInputField
          inputProps={{ className: '!w-full' }}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          errors={errors}
          className="w-full"
        />
        <Button type="submit" className="!bg-blue-300 min-w-0 py-6 hover:!bg-blue-300" content="Create Account" />
      </form>
    </FormProvider>
  );
}
