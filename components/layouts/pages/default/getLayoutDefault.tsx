import { Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface LayoutDefaultProps {
  className?: string;
  children: ReactNode;
}

export function LayoutDefault({ className, children }: LayoutDefaultProps) {
  const cxLayoutDefault = classNames(className, 'mt-48 mb-32 lg:mt-64 lg:mb-48 lg:mx-auto');
  return <Box className={cxLayoutDefault}>{children}</Box>;
}

export function getLayoutDefault(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
}

export function getLayoutDefaultSmall(page: ReactElement) {
  return <LayoutDefault className="my-48">{page}</LayoutDefault>;
}
