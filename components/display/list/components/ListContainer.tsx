import classNames from 'classnames';
import { FC, ReactNode } from 'react';

export interface ListContainerProps {
  title?: string | ReactNode;
  className?: string;
}

const ListContainer: FC<ListContainerProps> = ({ title, className, children }) => {
  const listContainerClassName = classNames('relative block w-full mx-auto', className);

  const renderTitle =
    typeof title === 'string' ? (
      <h6 className="text-white font-black uppercase text-2xl mb-6 text-center">{title}</h6>
    ) : (
      title
    );

  return (
    <div className={listContainerClassName}>
      {title && renderTitle}
      {children}
    </div>
  );
};

export default ListContainer;
