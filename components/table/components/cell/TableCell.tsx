import classNames from 'classnames';
import IconCopy from 'components/icon/IconCopy';
import { DetailedHTMLProps, FC, ReactNode, TdHTMLAttributes } from 'react';

export interface TableCellProps
  extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  isCopyable?: boolean;
  className?: string;
  children?: ReactNode;
}

const TableCell: FC<TableCellProps> = ({ isCopyable = false, className, children, ...props }) => {
  const cxTd = classNames('w-full text-white text-md block lg:table-cell relative lg:static p-6', className);

  return (
    <td className={cxTd} {...props}>
      {children}
      {isCopyable && <IconCopy />}
    </td>
  );
};

TableCell.displayName = 'TableCell';

export default TableCell;
