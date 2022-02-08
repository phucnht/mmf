import { Box } from '@whammytechvn/wt-components';
import { ReactElement, ReactNode } from 'react';

interface LayoutDefaultProps {
  children: ReactNode;
}

export function LayoutDefault({ children }: LayoutDefaultProps) {
  return <Box className="mt-64">{children}</Box>;
}

export function getLayoutDefault(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
}
