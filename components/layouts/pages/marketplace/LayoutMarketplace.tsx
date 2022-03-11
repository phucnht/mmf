import { ReactElement } from 'react';
import { Box } from '@whammytechvn/wt-components';
import SidebarFilter from 'components/navigation/sidebar/SidebarFilter';
import useWindowSize from 'hooks/useWindowSize';

export function LayoutMarketplace(page: ReactElement) {
  const { width } = useWindowSize();
  return width < 1024 ? (
    // <NavbarMobile baseSlug="/inventory">{page}</NavbarMobile>
    page
  ) : (
    <SidebarFilter>{page}</SidebarFilter>
  );
}

export function LayoutMarketplaceOffset(page: ReactElement) {
  const { width } = useWindowSize();
  return width < 1024 ? (
    // <NavbarMobile baseSlug="/inventory">{page}</NavbarMobile>
    page
  ) : (
    <SidebarFilter>
      <Box className="my-48 h-full">{page}</Box>
    </SidebarFilter>
  );
}
