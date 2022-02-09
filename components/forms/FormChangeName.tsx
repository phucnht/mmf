import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInputField } from 'components/input/InputField';
import { Button, Text } from '@whammytechvn/wt-components';

const schema = yup.object({ name: yup.string().required() }).required();

export default function FormChangeName() {
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  // TODO: Need to remove this
  const styles = { alignItems: 'end' };

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex gap-6" style={styles}>
        <FormInputField fullWidth name="name" label="Name" placeholder="Name" errors={errors} />
        <Button type="submit" compact className="!bg-blue-300 min-w-0 py-6 hover:!bg-blue-300">
          <Text className="font-normal capitalize">Change Name</Text>
        </Button>
      </form>
    </FormProvider>
  );
}
