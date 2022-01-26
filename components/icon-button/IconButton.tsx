import { ButtonProps } from '@whammytechvn/wt-components/dist/controls/button/Button.i';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  const cxIconButton = classNames('hover:opacity-75', className);
  return (
    <button className={cxIconButton} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
