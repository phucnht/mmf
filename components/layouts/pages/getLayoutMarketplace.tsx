import { ReactElement } from 'react';
import _findIndex from 'lodash/findIndex';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import { Box } from '@whammytechvn/wt-components';

const routes = [
  {
    slug: 'inventory',
    label: 'Inventory'
  },
  {
    slug: 'account',
    label: 'Account'
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

export function getLayoutMarketplace(page: ReactElement) {
  return (
    <Sidebar routes={routes} defaultSlug={DEFAULT_SLUG}>
      {page}
    </Sidebar>
  );
}

export function getLayoutMarketplaceOffset(page: ReactElement) {
  return (
    <Sidebar routes={routes} defaultSlug={DEFAULT_SLUG}>
      <Box className="pt-44 h-full">{page}</Box>
    </Sidebar>
  );
}
