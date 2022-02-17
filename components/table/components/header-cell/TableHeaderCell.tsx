import classNames from 'classnames';
import { DetailedHTMLProps, FC, ReactNode, ThHTMLAttributes } from 'react';
import { Column } from 'react-table';

import TableSortLabel from '../label/TableSortLabel';

export interface TableHeaderCellProps
  extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
  column: Column<Record<string, unknown>>;
  sortable?: boolean;
  className?: string;
  children?: ReactNode;
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({ column, sortable = false, className, children, ...props }) => {
  const thClassName = classNames(
    'p-6 font-black text-md lg:table-cell w-full text-white bg-blue-400 min-w-[20rem]',
    className
  );

  // Sort properties
  const { isSorted, isSortedDesc } = column as any;

  return (
    <th className={thClassName} {...props}>
      {sortable ? (
        <TableSortLabel
          className="hover:text-white hover:text-opacity-70"
          isSorted={isSorted}
          isSortedDesc={isSortedDesc}
        >
          {children}
        </TableSortLabel>
      ) : (
        children
      )}
    </th>
  );
};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
