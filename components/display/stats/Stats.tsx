import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface StatsProps {
  className?: string;
  icon?: ReactNode;
  primary: ReactNode;
  secondary: ReactNode;
}

export default function Stats({ className, icon, primary, secondary, ...props }: StatsProps) {
  const cxStats = classNames(
    `flex-col items-center justify-center rounded-[2rem] w-[33.1rem] h-[14.5rem] bg-blue-300`,
    className
  );
  return (
    <Flex className={cxStats} {...props}>
      {icon}
      <span className="font-bold text-xl text-white uppercase mt-5">{primary}</span>
      <span className="text-3xl font-bold text-orange-300">{secondary}</span>
    </Flex>
  );
}
