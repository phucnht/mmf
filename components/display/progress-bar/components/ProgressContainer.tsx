import classNames from 'classnames';
import { FC } from 'react';

interface ProgressContainerProps {
  className?: string;
}

const ProgressContainer: FC<ProgressContainerProps> = ({ className, children }) => {
  const progressContainerClassName = classNames('flex items-center justify-items-center', className);
  return <div className={progressContainerClassName}>{children}</div>;
};

export default ProgressContainer;
