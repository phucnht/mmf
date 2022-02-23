import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ListItemIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const ListItemIcon = ({ className, children, ...props }: ListItemIconProps) => {
  const ListItemIconClassName = classNames('list-item-icon', className);

  return (
    <div className={ListItemIconClassName} {...props}>
      {children}
    </div>
  );
};

export default ListItemIcon;
