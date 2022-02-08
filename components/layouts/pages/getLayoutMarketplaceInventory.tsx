import { ReactElement } from 'react';
import _findIndex from 'lodash/findIndex';

import imgIconAirdrop from '/public/assets/icons/airdrop.png';
import imgIconBox from '/public/assets/icons/box.png';
import imgIconCharacters from '/public/assets/icons/characters.png';
import imgIconEvents from '/public/assets/icons/events.png';
import imgIconItems from '/public/assets/icons/items.png';
import imgIconLands from '/public/assets/icons/lands.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { getLayoutMarketplace } from './getLayoutMarketplace';

const routes = [
  {
    icon: imgIconCharacters,
    label: 'Characters',
    slug: 'characters'
  },
  {
    icon: imgIconLands,
    label: 'Lands',
    slug: 'lands'
  },
  {
    icon: imgIconItems,
    label: 'Items',
    slug: 'items'
  },
  {
    icon: imgIconEvents,
    label: 'Events',
    slug: 'events'
  },
  {
    icon: imgIconAirdrop,
    label: 'Airdrop',
    slug: 'airdrop'
  },
  {
    icon: imgIconBox,
    label: 'Box',
    slug: 'box'
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
