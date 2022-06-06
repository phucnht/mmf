import { DateTime } from 'luxon';
import { default as Countdown } from 'react-countdown';

const CountdownTimer = ({ endTime, onComplete }: { endTime: string; onComplete?: () => void }) => {
  return (
    <div className='flex text-center gap-2'>
      <Countdown
        date={DateTime.fromISO(endTime).toMillis()}
        onComplete={onComplete}
        renderer={({ formatted: { days, hours, minutes, seconds } }) => (
          <>
            {[
              { label: 'Days', value: days },
              { label: 'Hours', value: hours },
              { label: 'Minutes', value: minutes },
              { label: 'Seconds', value: seconds },
            ].map((item, index) => (
              <div key={index} className='md:w-[70px] w-[64px] rounded bg-white/50 p-1'>
                <div className='font-black md:text-xl text-lg text-blue-400'>{item.value}</div>
                <div className='font-semibold md:text-base text-sm'>{item.label}</div>
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
};

export default CountdownTimer;
