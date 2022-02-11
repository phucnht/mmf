import { FC } from 'react';

const ProgressBarWrapper: FC = ({ children }) => {
  return <div className="w-full rounded-xl p-3.5 relative bg-blue-400">{children}</div>;
};

export default ProgressBarWrapper;
