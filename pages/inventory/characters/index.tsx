import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryCharacterCard from '../../../components/pages/inventory/character/InventoryCharacterCard';
import { useRouter } from 'next/router';

import useAuthGuard from 'hooks/useAuthGuard';

import imgCharacter1 from '/public/assets/items/characters/character-1.png';
import imgCharacter2 from '/public/assets/items/characters/character-2.png';
import imgCharacter3 from '/public/assets/items/characters/character-3.png';

export const mockCharacters = [
  {
    id: '123456781',
    ownerId: '0x4873982792s',
    name: 'Myrtle Huff',
    rarity: 'pink',
    imgSrc: imgCharacter1,
    priceBNB: 11356,
    priceUSD: 1127
  },
  {
    id: '123456782',
    ownerId: '0x4873982792s',
    name: 'Caroline Logan',
    rarity: 'pink',
    imgSrc: imgCharacter2,
    priceBNB: 11356,
    priceUSD: 1127
  },
  {
    id: '123456783',
    ownerId: '0x4873982792s',
    name: 'Jana Warner',
    rarity: 'pink',
    imgSrc: imgCharacter3,
    priceBNB: 11356,
    priceUSD: 1127
  }
];

const InventoryCharacters: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (characterId: string) => {
    router.push(`/inventory/characters/${characterId}`);
  };
  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8 -mt-8">
        {mockCharacters.map((item, index) => (
          <InventoryCharacterCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryCharacters.getLayout = getLayoutInventoryInventory;

export default InventoryCharacters;
