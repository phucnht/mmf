import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface StatsProps {
  className?: string;
  primary: ReactNode;
  secondary: ReactNode;
}

export default function Stats({ className, primary, secondary, ...props }: StatsProps) {
  const cxStats = classNames(
    `flex-col items-center justify-center rounded-[2rem] w-[33.1rem] h-[9.5rem] bg-blue-300`,
    className
  );
  return (
    <Flex className={cxStats} {...props}>
      <span className="font-bold text-xl text-white uppercase">{primary}</span>
      <span className="text-2xl font-bold text-yellow-100">{secondary}</span>
    </Flex>
  );
}
