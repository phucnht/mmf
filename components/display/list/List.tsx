import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import ListContainer, { ListContainerProps } from './components/ListContainer';
import ListItemAvatar, { ListItemAvatarProps } from './components/ListItemAvatar';
import ListItemIcon, { ListItemIconProps } from './components/ListItemIcon';
import ListItemText, { ListItemTextProps } from './components/ListItemText';
import ListItem, { ListItemProps } from './ListItem';

interface ListCompoundProps {
  Container: FC<ListContainerProps>;
  Item: FC<ListItemProps>;
  ItemAvatar: FC<ListItemAvatarProps>;
  ItemText: FC<ListItemTextProps>;
  ItemIcon: FC<ListItemIconProps>;
}

export interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  className?: string;
}

const List: FC<ListProps> & ListCompoundProps = ({ className, children, ...props }) => {
  const listClassName = classNames('w-full flex flex-col text-white rounded-[2rem] p-8 bg-blue-400', className);

  return (
    <ul className={listClassName} {...props}>
      {children}
    </ul>
  );
};

List.Container = ListContainer;
List.Item = ListItem;
List.ItemAvatar = ListItemAvatar;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;

List.displayName = 'List';

export default List;
