import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface TableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  className?: string;
}

const TableRow: FC<TableRowProps> = ({ className, children, ...props }) => {
  const trClassName = classNames(
    'flex flex-wrap lg:flex-nowrap mb-10 lg:mb-0 text-white w-full border-b border-b-blue-100 bg-blue-400',
    className
  );

  return (
    <tr className={trClassName} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
