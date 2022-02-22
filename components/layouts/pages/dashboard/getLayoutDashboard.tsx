import { ReactElement } from 'react';

import imgIconBox from '/public/assets/navbar/box.png';
import imgIconDashboard from '/public/assets/navbar/dashboard.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';

const routes = [
  {
    icon: imgIconBox,
    label: 'Buy Box',
    slug: 'box'
  },
  {
    icon: imgIconDashboard,
    label: 'Dashboard',
    slug: 'dashboard'
  }
];

export function getLayoutDashboard(page: ReactElement) {
  return (
    <>
      <SidebarHorizontal routes={routes} baseSlug="/dashboard">
        {page}
      </SidebarHorizontal>
    </>
  );
}
