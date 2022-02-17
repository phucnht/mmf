import { Heading } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';

export interface TableContainerProps {
  title?: string | ReactNode;
  className?: string;
}

const TableContainer: FC<TableContainerProps> = ({ title, className, children }) => {
  const tableContainerClassName = classNames('relative block w-full mx-auto justify-items-start', className);

  const renderTitle =
    typeof title === 'string' ? (
      <Heading as="h6" className="text-white font-bold uppercase text-2xl mb-6">
        {title}
      </Heading>
    ) : (
      title
    );

  return (
    <div className={tableContainerClassName}>
      {title && renderTitle}
      {children}
    </div>
  );
};

export default TableContainer;
