import React, { DetailedHTMLProps, forwardRef, LegacyRef } from 'react';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errors: any;
  innerRef?: any;
  fullWidth?: boolean;
  className?: string;
}

export const InputText = ({ innerRef, fullWidth = false, className, errors, ...props }: InputTextProps) => {
  const cxInputText = classNames(
    'min-w-[27rem] w-[27rem] py-6 px-10 bg-blue-400 rounded-[2rem] text-lg focus:outline-blue-400',
    { 'w-full': fullWidth },
    className
  );
  return <input ref={innerRef} className={cxInputText} {...props} />;
};

const InputTextWithRef = forwardRef<HTMLInputElement, InputTextProps>((props: InputTextProps, ref) => {
  return <InputText innerRef={ref} {...props} />;
});

export function FormInputText({ name, ...props }: InputTextProps) {
  const { register } = useFormContext();
  return <InputTextWithRef {...props} {...register(name as string)} />;
}
