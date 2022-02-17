import { ReactElement } from 'react';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import { Box } from '@whammytechvn/wt-components';

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

const DEFAULT_SLUG = 'inventory';

export function getLayoutInventory(page: ReactElement) {
  return (
    <Sidebar routes={routes} baseSlug="/inventory" defaultSlug={DEFAULT_SLUG}>
      {page}
    </Sidebar>
  );
}

export function getLayoutInventoryOffset(page: ReactElement) {
  return (
    <Sidebar routes={routes} baseSlug="/inventory" defaultSlug={DEFAULT_SLUG}>
      <Box className="pt-44 h-full">{page}</Box>
    </Sidebar>
  );
}
