import { ReactElement } from 'react';

import imgIconCharacters from 'public/assets/navbar/characters.png';
import imgIconItems from 'public/assets/navbar/items.png';
import imgIconLands from 'public/assets/navbar/lands.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { LayoutMarketplace } from './LayoutMarketplace';

const routes = [
  {
    icon: imgIconCharacters,
    label: 'Characters',
    slug: 'characters',
    disabled: true
  },
  {
    icon: imgIconLands,
    label: 'Lands',
    slug: 'lands',
    disabled: true
  },
  {
    icon: imgIconItems,
    label: 'Items',
    slug: 'items'
  }
];

export function LayoutMarketplaceInventory(page: ReactElement) {
  return LayoutMarketplace(
    <SidebarHorizontal routes={routes} baseSlug="/marketplace">
      {page}
    </SidebarHorizontal>
  );
}