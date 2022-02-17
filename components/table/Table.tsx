import classNames from 'classnames';
import { DetailedHTMLProps, FC, TableHTMLAttributes } from 'react';

import TableBody, { TableBodyProps } from './components/body/TableBody';
import TableCell, { TableCellProps } from './components/cell/TableCell';
import TableContainer, { TableContainerProps } from './components/container/TableContainer';
import TableHead, { TableHeadProps } from './components/head/TableHead';
import TableHeaderCell, { TableHeaderCellProps } from './components/header-cell/TableHeaderCell';
import TableSortLabel, { TableSortLabelProps } from './components/label/TableSortLabel';
import TableRow, { TableRowProps } from './components/row/TableRow';

interface TableCompoundProps {
  Body: FC<TableBodyProps>;
  Cell: FC<TableCellProps>;
  Container: FC<TableContainerProps>;
  Head: FC<TableHeadProps>;
  HeaderCell: FC<TableHeaderCellProps>;
  Row: FC<TableRowProps>;
  SortLabel: FC<TableSortLabelProps>;
}

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  className?: string;
}

const Table: FC<TableProps> & TableCompoundProps = ({ className, children, ...props }) => {
  const cxTable = classNames('border-collapse w-full text-content', className);

  return (
    <table className={cxTable} {...props}>
      {children}
    </table>
  );
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Container = TableContainer;
Table.Head = TableHead;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.SortLabel = TableSortLabel;

Table.displayName = 'Table';

export default Table;
