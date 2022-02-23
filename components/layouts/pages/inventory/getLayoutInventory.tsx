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
    label: 'History',
    disabled: true
  },
  {
    slug: 'wallet',
    label: 'Wallet',
    disabled: true
  },
  {
    slug: 'upgrade',
    label: 'Upgrade',
    disabled: true
  }
];

export function getLayoutInventory(page: ReactElement) {
  return (
    <Sidebar routes={routes} baseSlug="/inventory">
      {page}
    </Sidebar>
  );
}

export function getLayoutInventoryOffset(page: ReactElement) {
  return (
    <Sidebar routes={routes} baseSlug="/inventory">
      <Box className="my-48 h-full">{page}</Box>
    </Sidebar>
  );
}
