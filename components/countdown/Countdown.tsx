// import { selectSeason } from 'store/season/seasonSlice';
import { useTimer } from 'react-timer-hook';
import classNames from 'classnames';
import { FC } from 'react';
import { zeroPad } from 'utils/convert';
import { Flex } from '@whammytechvn/wt-components';
import clsxm from 'utils/clsxm';

const CountdownTitle: FC<{ className?: string }> = ({ className, children }) => {
  const countdownTitleClassName = classNames('text-white font-bold text-md lg:text-2xl', className);
  return <span className={countdownTitleClassName}>{children}</span>;
};

const CountdownEnded = () => <CountdownTitle className="font-bold uppercase">Event Ended</CountdownTitle>;

const CountdownInProgress = ({ endDate }: { endDate: number }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(endDate)
  });

  return (
    <>
      <CountdownTitle>In Progress...</CountdownTitle>
      <span className="font-bold text-md lg:text-2xl text-white tracking-wider">
        {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    </>
  );
};

const CountdownComingBlock = ({ value, unit }: { value: string; unit: string }) => (
  <Flex className="flex-col text-white">
    <span className="text-md lg:text-2xl font-bold justify-center text-center">{value}</span>
    <span className="text-sm lg:text-md font-normal text-center">{unit}</span>
  </Flex>
);

const CountdownComing = ({ startDate }: { startDate: number }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(startDate)
  });

  return (
    <>
      <CountdownComingBlock value={zeroPad(days)} unit="days" />
      <CountdownComingBlock value={zeroPad(hours)} unit="hours" />
      <CountdownComingBlock value={zeroPad(minutes)} unit="minutes" />
      <CountdownComingBlock value={zeroPad(seconds)} unit="seconds" />
    </>
  );
};

export interface CountdownProps {
  fromDate: Date;
  toDate: Date;
  className?: string;
}

export default function Countdown({ fromDate, toDate, className }: CountdownProps) {
  const startDate = new Date(fromDate).getTime();
  const endDate = new Date(toDate).getTime();
  const now = Date.now();

  let renderCountdown = <CountdownInProgress endDate={endDate} />;

  if (now < startDate) {
    renderCountdown = <CountdownComing startDate={startDate} />;
  }

  if (now > endDate) {
    renderCountdown = <CountdownEnded />;
  }

  const cxCountdown = clsxm(
    'flex items-center justify-evenly w-full h-[5rem] lg:h-[9.3rem] bgg-green rounded-[2rem] p-4',
    className
  );

  return <div className={cxCountdown}>{renderCountdown}</div>;
}
