import classNames from 'classnames';
import { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react';

export interface ListItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  className?: string;
  content?: string;
  link?: boolean;
  to?: string;
}

const ListItem: FC<ListItemProps> = ({ content, className, children, ...props }) => {
  const listItemClassName = classNames('flex px-6 py-8 rounded-lg gap-8 hover:bg-green-500', className);

  let renderItem = children;

  if (content) {
    renderItem = <p>{content}</p>;
  }

  return (
    <li className={listItemClassName} {...props}>
      {renderItem}
    </li>
  );
};

export default ListItem;
