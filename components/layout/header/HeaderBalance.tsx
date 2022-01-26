import { Stack } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC } from 'react';

interface HeaderBalanceProps {
  value?: number | string;
  loading?: boolean;
  className?: string;
}

const HeaderBalance: FC<HeaderBalanceProps> = ({ value, loading, className }) => {
  const cxHeaderBalance = classNames(className);
  return (
    <Stack className={cxHeaderBalance}>
      <span>{loading ? 'Loading...' : value}</span>
      <span className="ml-2 bg-[url('/assets/coin.png')] w-9 h-10 bg-center bg-no-repeat" />
    </Stack>
  );
};

export default HeaderBalance;
