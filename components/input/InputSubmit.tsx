import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputSubmitProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

export default function InputSubmit({ className, ...props }: InputSubmitProps) {
  const cxInputText = classNames('px-4 py-6 bg-blue-300 text-white text-md rounded-[2rem] w-fit', className);
  return <input className={cxInputText} {...props} />;
}
