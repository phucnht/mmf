import { Center, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface BadgeProps {
  className?: string;
  content?: string;
  children?: ReactNode;
}

export function Badge({ className, content, children }: BadgeProps) {
  const renderContent = children || <Text className="font-black text-xl text-white">{content}</Text>;
  const cxBadge = classNames(
    'flex justify-center items-center rounded-full w-[4.4rem] h-[4.4rem] bg-[#6DA900] p-4',
    className
  );

  return <Center className={cxBadge}>{renderContent}</Center>;
}
