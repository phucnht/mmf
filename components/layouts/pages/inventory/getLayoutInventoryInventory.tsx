import { ReactElement } from 'react';

import imgIconAirdrop from '/public/assets/navbar/airdrop.png';
import imgIconBox from '/public/assets/navbar/box.png';
import imgIconCharacters from '/public/assets/navbar/characters.png';
import imgIconEvents from '/public/assets/navbar/events.png';
import imgIconItems from '/public/assets/navbar/items.png';
import imgIconLands from '/public/assets/navbar/lands.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { getLayoutInventory } from './getLayoutInventory';

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

export function getLayoutInventoryInventory(page: ReactElement) {
  return getLayoutInventory(
    <SidebarHorizontal routes={routes} baseSlug="/inventory">
      {page}
    </SidebarHorizontal>
  );
}
