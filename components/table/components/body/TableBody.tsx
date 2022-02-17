import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface TableBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
  className?: string;
}

const TableBody: FC<TableBodyProps> = ({ className, children, ...props }) => {
  const tbodyClassName = classNames('block w-full overflow-y-auto bg-blue-400 bg-opacity-40 h-[28rem]', className);

  return (
    <tbody className={tbodyClassName} {...props}>
      {children}
    </tbody>
  );
};

export default TableBody;
