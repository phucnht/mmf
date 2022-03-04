import React, { DetailedHTMLProps } from 'react';
import { InputHTMLAttributes } from 'react';
import { FormInputText, InputText } from './InputText';
import classNames from 'classnames';
import InputDropdown from './InputDropdown';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { Flex, Text } from '@whammytechvn/wt-components';

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  prefix?: string;
  suffix?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
  errors?: {
    [x: string]: {
      message: string;
    };
  };
  inputProps?: {
    className?: string;
  };
  isForm?: boolean;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
}

export function InputField({
  name,
  label,
  type = 'text',
  helperText,
  fullWidth,
  className,
  inputProps,
  errors = {},
  options,
  isForm = false,
  prefix,
  suffix,
  ...props
}: InputFieldProps) {
  const cxInputField = classNames('flex-col items-start relative', { 'w-full': fullWidth }, className);
  const cxInput = classNames({ '!w-full': fullWidth }, inputProps?.className);
  const commonProps = { readOnly: !isForm, name, errors, prefix, suffix, ...props };

  let ComponentInputText = InputText;

  if (isForm) {
    ComponentInputText = FormInputText;
  }

  return (
    <Flex className={cxInputField}>
      {label && (
        <label htmlFor={name} className="text-md mb-5">
          {label}
        </label>
      )}
      {['text', 'password', 'email'].includes(type) && (
        <ComponentInputText id={name} className={cxInput} {...commonProps} />
      )}
      {type === 'dropdown' && options && <InputDropdown options={options} className={cxInput} {...commonProps} />}
      {errors[name]?.message && <Text className="text-red-400 text-sm mt-4">* {errors[name]?.message}</Text>}
      {helperText && <Text className="text-md mt-8">{helperText}</Text>}
    </Flex>
  );
}

export function FormInputField(props: InputFieldProps) {
  return <InputField isForm {...props} />;
}
