import classNames from 'classnames';
import { FC } from 'react';
import { toPercentage, toK } from 'utils/convert';
import ProgressBarWrapper from './components/ProgressBarWrapper';
import ProgressContainer from './components/ProgressContainer';
import ProgressLine from './components/ProgressLine';
import ProgressTitle from './components/ProgressTitle';
import ProgressValue from './components/ProgressValue';

interface ProgressBarProps {
  content?: string;
  type?: 'info' | 'success' | 'error';
  className?: string;
  value: number;
  maxValue: number;
  minValue?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ content, value, minValue = 0, maxValue, type = 'info', className }) => {
  const progressPercentage = toPercentage(value, maxValue - minValue);
  const cxProgress = classNames(`h-full rounded-sm relative z-10 border`, {
    'bg-green-500 border-green-500': type === 'info',
    'bg-green-400 border-green-400': type === 'success',
    'bg-red-200 border-red-200': type === 'error'
  });

  return (
    <ProgressContainer className={className}>
      <ProgressBarWrapper>
        <div className={`h-6 relative`}>
          <ProgressLine />
          <div style={{ width: `${progressPercentage}%` }} className={cxProgress} />
        </div>
        {content && <ProgressTitle>{content}</ProgressTitle>}
      </ProgressBarWrapper>
      <ProgressValue>{toK(maxValue)}</ProgressValue>
    </ProgressContainer>
  );
};

export default ProgressBar;
