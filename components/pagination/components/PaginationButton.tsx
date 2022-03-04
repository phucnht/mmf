import classNames from 'classnames';
import { DetailedHTMLProps, FC, ButtonHTMLAttributes } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

export interface PaginationButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  direction: 'previous' | 'next';
  className?: string;
}

const PaginationButton: FC<PaginationButtonProps> = ({ direction, onClick, disabled, className }) => {
  const paginationButtonClassName = classNames(
    'focus:outline-none cursor-pointer w-[2.8rem] h-[2.8rem] bg-brown-100 rounded-lg mx-4',
    className
  );
  return (
    <button type="button" className={paginationButtonClassName} disabled={disabled} onClick={onClick}>
      {direction === 'previous' && <MinusIcon className={`text-white h-8 m-auto`} />}
      {direction === 'next' && <PlusIcon className={`text-white h-8 m-auto`} />}
    </button>
  );
};

export default PaginationButton;
