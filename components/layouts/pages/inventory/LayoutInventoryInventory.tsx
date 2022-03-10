import { ReactElement } from 'react';

import imgIconAirdrop from 'public/assets/navbar/airdrop.png';
import imgIconBox from 'public/assets/navbar/box.png';
import imgIconCharacters from 'public/assets/navbar/characters.png';
import imgIconEvents from 'public/assets/navbar/events.png';
import imgIconItems from 'public/assets/navbar/items.png';
import imgIconLands from 'public/assets/navbar/lands.png';
import SidebarHorizontal from 'components/navigation/sidebar/SidebarHorizontal';
import { LayoutInventory } from './LayoutInventory';

export const routesInventorySub = [
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
    slug: 'items',
    disabled: true
  },
  {
    icon: imgIconEvents,
    label: 'Events',
    slug: 'events',
    disabled: true
  },
  {
    icon: imgIconAirdrop,
    label: 'Airdrop',
    slug: 'airdrop'
  },
  {
    icon: imgIconBox,
    label: 'Box',
    slug: 'box',
    disabled: true
  }
];

export function LayoutInventoryInventory(page: ReactElement) {
  return LayoutInventory(
    <SidebarHorizontal routes={routesInventorySub} baseSlug="/inventory">
      {page}
    </SidebarHorizontal>
  );
}
