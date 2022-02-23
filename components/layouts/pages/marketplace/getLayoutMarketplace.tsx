import { ReactElement } from 'react';
import { Box } from '@whammytechvn/wt-components';
import SidebarFilter from 'components/navigation/sidebar/SidebarFilter';

export function getLayoutMarketplace(page: ReactElement) {
  return <SidebarFilter>{page}</SidebarFilter>;
}

export function getLayoutMarketplaceOffset(page: ReactElement) {
  return (
    <SidebarFilter>
      <Box className="my-48 h-full">{page}</Box>
    </SidebarFilter>
  );
}
