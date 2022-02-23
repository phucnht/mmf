import { ReactElement } from 'react';

import imgIconBox from '/public/assets/navbar/box.png';
import imgIconDashboard from '/public/assets/navbar/dashboard.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { Grid } from '@whammytechvn/wt-components';

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
      <Grid className="grid-cols-4 items-start justify-start w-full gap-x-6 gap-y-4">
        <SidebarHorizontal className="col-start-2 col-span-3" routes={routes} baseSlug="/dashboard" />
      </Grid>
      {page}
    </>
  );
}
