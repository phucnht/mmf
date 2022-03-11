import { ReactElement } from 'react';
import Sidebar from 'components/navigation/sidebar/Sidebar';
import { Box } from '@whammytechvn/wt-components';
import useWindowSize from 'hooks/useWindowSize';
import NavbarMobile from 'components/navigation/navbar-mobile/NavbarMobile';

export const routesInventory = [
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

export function LayoutInventory(page: ReactElement) {
  const { width } = useWindowSize();
  return width < 1024 ? (
    <NavbarMobile routes={routesInventory} baseSlug="/inventory">
      {page}
    </NavbarMobile>
  ) : (
    <Sidebar routes={routesInventory} baseSlug="/inventory">
      {page}
    </Sidebar>
  );
}

export function LayoutInventoryOffset(page: ReactElement) {
  const { width } = useWindowSize();
  return width < 1024 ? (
    <NavbarMobile routes={routesInventory} baseSlug="/inventory">
      {page}
    </NavbarMobile>
  ) : (
    <Sidebar routes={routesInventory} baseSlug="/inventory">
      <Box className="my-48 h-full">{page}</Box>
    </Sidebar>
  );
}
