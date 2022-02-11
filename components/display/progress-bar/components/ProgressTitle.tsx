import { FC } from 'react';

const ProgressTitle: FC = ({ children }) => {
  return (
    <div className="absolute uppercase text-xs text-white top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
};

export default ProgressTitle;
