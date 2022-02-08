import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  className?: string;
}

export default function Divider({ className, ...props }: DividerProps) {
  const cxDivider = classNames(className);
  return <hr className="mt-10 border border-solid border-blue-100" {...props} />;
}
