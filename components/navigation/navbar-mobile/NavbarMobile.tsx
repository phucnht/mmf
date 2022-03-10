import { GridBox } from '@whammytechvn/wt-components';
import { routesInventory } from 'components/layouts/pages/inventory/LayoutInventory';
import { routesInventorySub } from 'components/layouts/pages/inventory/LayoutInventoryInventory';
import UserAvatar from 'components/user-avatar/UserAvatar';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { SidebarRoutesProps } from '../sidebar/sidebar.typings';
import NavbarMobileSelect from './NavbarMobileSelect';

export default function NavbarMobile({ children }: SidebarRoutesProps) {
  const router = useRouter();
  const isSelectInventory = router.pathname.includes('/inventory');

  return (
    <>
      <UserAvatar className="mb-4" />
      <GridBox className="grid-cols-2 gap-8 my-8">
        <NavbarMobileSelect routes={routesInventory} levelSlug={1} baseSlug="/inventory" />
        {isSelectInventory && <NavbarMobileSelect routes={routesInventorySub} levelSlug={2} baseSlug="/inventory" />}
      </GridBox>
      {children}
    </>
  );
}
