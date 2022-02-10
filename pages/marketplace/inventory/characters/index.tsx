import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import _times from 'lodash/times';
import _sample from 'lodash/sample';

import imgCharacter1 from '/public/assets/inventory/characters/character-1.png';
import InventoryCharacterCard from './components/InventoryCharacterCard';
import Router, { useRouter } from 'next/router';

const items = _times(2, i => ({
  id: '12345678',
  name: _sample(['Myrtle Huff', 'Caroline Logan', 'Jana Warner']),
  rarity: 'pink',
  imgSrc: imgCharacter1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const MarketplaceInventoryCharacters: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/inventory/characters/${itemId}`);
  };

  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8 -mt-8">
        {items.map((item, index) => (
          <InventoryCharacterCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryCharacters;
