import { ButtonProps } from '@whammytechvn/wt-components/dist/controls/button/Button.i';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  const cxIconButton = classNames(
    'p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none',
    className
  );
  return (
    <button className={cxIconButton} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
