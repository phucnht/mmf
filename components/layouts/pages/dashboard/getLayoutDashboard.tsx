import { ReactElement } from 'react';

import imgIconBox from 'public/assets/navbar/box.png';
import imgIconDashboard from 'public/assets/navbar/dashboard.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { Grid } from '@whammytechvn/wt-components';

const routes = [
  // {
  //   icon: imgIconBox,
  //   label: 'Buy Box',
  //   slug: 'box'
  // },
  {
    icon: imgIconDashboard,
    label: 'Dashboard',
    slug: 'dashboard'
  }
];

export function getLayoutDashboard(page: ReactElement) {
  return (
    <>
      <Grid className="flex w-full">
        <SidebarHorizontal routes={routes} baseSlug="/dashboard" />
      </Grid>
      {page}
    </>
  );
}
