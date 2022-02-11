import classNames from 'classnames';
import { FC } from 'react';
import IconSort from './IconSort';

export interface TableSortLabelProps {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  className?: string;
}

const TableSortLabel: FC<TableSortLabelProps> = ({ isSorted, isSortedDesc, className, children }) => {
  const sortLabelClassName = classNames('inline-flex items-center cursor-pointer hover:text-white group', className);
  return (
    <span className={sortLabelClassName}>
      {children}
      {isSorted ? isSortedDesc ? <IconSort /> : <IconSort /> : null}
    </span>
  );
};

export default TableSortLabel;
