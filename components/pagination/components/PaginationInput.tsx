import classNames from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface PaginationInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const PaginationInput: FC<PaginationInputProps> = ({ className, ...props }) => {
  const paginationInputClassName = classNames(
    'flex justify-center items-center rounded-xl mr-2 text-center min-w-[7.7rem] bg-blue-100 border-[3px] border-primary text-xl',
    className
  );
  return <input className={paginationInputClassName} {...props} />;
};

export default PaginationInput;
