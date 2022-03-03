import React, { DetailedHTMLProps, forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errors?: any;
  innerRef?: any;
  fullWidth?: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const InputText = ({ prefix, suffix, innerRef, fullWidth = false, className, ...props }: InputTextProps) => {
  const cxInputText = classNames(
    'flex min-w-[27rem] w-[27rem] py-6 px-10 bg-blue-400 rounded-[2rem] text-lg',
    { 'w-full': fullWidth },
    className
  );
  return (
    <div className={cxInputText}>
      {prefix && <span className="-ml-4 mr-6">{prefix}</span>}
      <input ref={innerRef} className="bg-transparent text-lg outline-none focus:outline-blue-400" {...props} />
      {suffix && <span className="-ml-4 mr-6">{suffix}</span>}
    </div>
  );
};

const InputTextWithRef = forwardRef<HTMLInputElement, InputTextProps>((props: InputTextProps, ref) => {
  return <InputText innerRef={ref} {...props} />;
});

InputTextWithRef.displayName = 'InputTextWithRef';

export function FormInputText({ name, ...props }: InputTextProps) {
  const { register } = useFormContext();
  return <InputTextWithRef {...props} {...register(name as string)} />;
}
