import { ReactElement } from 'react';

import imgIconCharacters from '/public/assets/navbar/characters.png';
import imgIconItems from '/public/assets/navbar/items.png';
import imgIconLands from '/public/assets/navbar/lands.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { getLayoutMarketplace } from './getLayoutMarketplace';

const routes = [
  {
    icon: imgIconCharacters,
    label: 'Characters',
    slug: 'marketplace/characters'
  },
  {
    icon: imgIconLands,
    label: 'Lands',
    slug: 'marketplace/lands'
  },
  {
    icon: imgIconItems,
    label: 'Items',
    slug: 'marketplace/items'
  }
];

const DEFAULT_SLUG = 'airdrop';

export function getLayoutMarketplaceInventory(page: ReactElement) {
  return getLayoutMarketplace(
    <SidebarHorizontal routes={routes} defaultSlug={DEFAULT_SLUG}>
      {page}
    </SidebarHorizontal>
  );
}