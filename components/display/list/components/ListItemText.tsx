import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ListItemTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  primary?: ReactNode;
  secondary?: ReactNode;
  className?: string;
  isCurrency?: boolean;
  children?: ReactNode;
}

const ListItemText = ({ primary, isCurrency, secondary, className, children, ...props }: ListItemTextProps) => {
  const cxListItemText = classNames('flex-col justify-center', { 'items-end': isCurrency }, className);
  const cxPrimary = classNames('text-xl font-bold', { 'text-right': isCurrency }, className);
  const cxSecondary = classNames('text-md font-normal', { 'text-right': isCurrency }, className);

  return (
    <Flex className={cxListItemText} {...props}>
      <span className={cxPrimary}>{primary || children}</span>
      {secondary && <div className={cxSecondary}>{secondary}</div>}
    </Flex>
  );
};

export default ListItemText;
