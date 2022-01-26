// import { selectSeason } from 'store/season/seasonSlice';
import { useTimer } from 'react-timer-hook';
import classNames from 'classnames';
import { FC } from 'react';
import { zeroPad } from 'utils/convert';
import { useAppSelector } from 'store/store.hook';

const CountdownTitle: FC<{ className?: string }> = ({ className, children }) => {
  const countdownTitleClassName = classNames('font-bold text-2xl', className);
  return <span className={countdownTitleClassName}>{children}</span>;
};

const CountdownEnded = () => <CountdownTitle className="uppercase">Event Ended</CountdownTitle>;

const CountdownInProgress = ({ endDate }: { endDate: number }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(endDate)
  });

  return (
    <>
      <CountdownTitle>In Progress...</CountdownTitle>
      <span className="font-bold text-title text-white tracking-wider">
        {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    </>
  );
};

const CountdownComingBlock = ({ value, unit }: { value: string; unit: string }) => (
  <div className="flex flex-col">
    <span className="text-2xl font-bold justify-center text-center">{value}</span>
    <span className="text-sm font-normal text-center">{unit}</span>
  </div>
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

const Countdown = ({ className }: { className?: string }) => {
  // const { startDate, endDate } = useAppSelector(selectSeason);
  const _now = new Date();
  const startDate = _now.setDate(_now.getDate() - 14);
  const endDate = _now.setDate(_now.getDate() + 14);
  const now = Date.now();

  let renderCountdown = <CountdownInProgress endDate={endDate * 1000} />;

  if (now < startDate * 1000) {
    renderCountdown = <CountdownComing startDate={startDate * 1000} />;
  }

  if (now > endDate * 1000) {
    renderCountdown = <CountdownEnded />;
  }

  const cxCountdown = classNames(
    'flex items-center justify-evenly w-full h-36 bgg-green rounded-[2rem] p-8',
    className
  );

  return <div className={cxCountdown}>{renderCountdown}</div>;
};

export default Countdown;
