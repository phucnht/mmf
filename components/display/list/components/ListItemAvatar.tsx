import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ListItemAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const ListItemAvatar = ({ className, children, ...props }: ListItemAvatarProps) => {
  const listItemAvatarClassName = classNames('m-auto list-item-avatar', className);

  return (
    <div className={listItemAvatarClassName} {...props}>
      {children}
    </div>
  );
};

export default ListItemAvatar;
