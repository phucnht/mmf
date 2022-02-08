import React, { Component, DetailedHTMLProps, useEffect } from 'react';
import { InputHTMLAttributes } from 'react';
import { FormInputText, InputText } from './InputText';
import classNames from 'classnames';
import InputDropdown from './InputDropdown';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { Flex } from '@whammytechvn/wt-components';

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
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
  className,
  inputProps,
  errors = {},
  options,
  isForm = false,
  ...props
}: InputFieldProps) {
  const cxInputField = classNames('flex-col', className);
  const commonProps = { readOnly: !isForm, name, ...props };

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
        <ComponentInputText id={name} className={inputProps?.className} {...commonProps} />
      )}
      {type === 'dropdown' && options && (
        <InputDropdown options={options} className={inputProps?.className} {...commonProps} />
      )}
    </Flex>
  );
}

export function FormInputField(props: InputFieldProps) {
  return <InputField isForm {...props} />;
}
