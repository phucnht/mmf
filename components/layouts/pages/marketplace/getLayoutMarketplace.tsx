import { ReactElement } from 'react';
import { Box } from '@whammytechvn/wt-components';
import SidebarFilter from 'components/navigation/sidebar/SidebarFilter';

const routes = [
  {
    slug: 'inventory',
    label: 'Inventory'
  },
  {
    slug: 'account',
    label: 'Account Settings'
  },
  {
    slug: 'history',
    label: 'History'
  },
  {
    slug: 'wallet',
    label: 'Wallet'
  },
  {
    slug: 'upgrade',
    label: 'Upgrade'
  }
];

export function getLayoutMarketplace(page: ReactElement) {
  return (
    <SidebarFilter routes={routes} baseSlug="/marketplace">
      {page}
    </SidebarFilter>
  );
}

export function getLayoutMarketplaceOffset(page: ReactElement) {
  return (
    <SidebarFilter routes={routes} baseSlug="/marketplace">
      <Box className="pt-44 h-full">{page}</Box>
    </SidebarFilter>
  );
}
