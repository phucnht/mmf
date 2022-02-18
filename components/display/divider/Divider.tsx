import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  className?: string;
}

export default function Divider({ className, ...props }: DividerProps) {
  const cxDivider = classNames('border border-solid border-blue-100', className);
  return <hr className={cxDivider} {...props} />;
}
