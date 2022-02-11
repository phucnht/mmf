import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface TableHeadProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
  className?: string;
}

const TableHead: FC<TableHeadProps> = ({ className, children, ...props }) => {
  const theadClassName = classNames('flex bg-blue-400', className);

  return (
    <thead className={theadClassName} {...props}>
      {children}
    </thead>
  );
};

export default TableHead;
