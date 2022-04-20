import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC } from 'react';
import { useTimer } from 'react-timer-hook';
import clsxm from 'utils/clsxm';
import { zeroPad } from 'utils/convert';

const CountdownTitle: FC<{ className?: string }> = ({ className, children }) => {
  const countdownTitleClassName = classNames('text-white font-bold text-center text-md lg:text-xl mr-4', className);
  return <span className={countdownTitleClassName}>{children}</span>;
};

const CountdownTimer = ({ endTime }: { endTime: number }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(endTime)
  });
  return (
    <>
      <CountdownTitle>
        FIRST METAVERSE <br className="hidden lg:inline" /> CAMPAIGN
      </CountdownTitle>
      <div className="flex gap-3">
        <CountdownComingBlock value={zeroPad(days)} unit="days" />
        <CountdownComingBlock value={zeroPad(hours)} unit="hours" />
        <CountdownComingBlock value={zeroPad(minutes)} unit="minutes" />
        <CountdownComingBlock value={zeroPad(seconds)} unit="seconds" />
      </div>
    </>
  );
};

const CountdownComingBlock = ({ value, unit }: { value: string; unit: string }) => (
  <Flex className="flex-col text-white bgg-green py-2 w-[7rem]">
    <span className="text-md lg:text-2xl font-bold justify-center text-center">{value}</span>
    <span className="text-sm lg:text-md font-normal text-center">{unit}</span>
  </Flex>
);

export interface CountdownProps {
  fromDate: Date;
  toDate: Date;
  className?: string;
}

export default function Countdown({ fromDate, toDate, className }: CountdownProps) {
  const startDate = new Date(fromDate).getTime();
  const endDate = new Date(toDate).getTime();
  const now = Date.now();

  let renderCountdown = <CountdownTimer endTime={endDate} />;

  if (now < startDate) {
    renderCountdown = <CountdownTimer endTime={startDate} />;
  }

  if (now > endDate) {
    renderCountdown = <CountdownTimer endTime={now} />;
  }

  const cxCountdown = clsxm(
    'flex flex-col lg:flex-row items-center justify-evenly w-full min-h-[9rem] bgg-green rounded-[2rem] gap-3 p-6',
    className
  );

  return <div className={cxCountdown}>{renderCountdown}</div>;
}
