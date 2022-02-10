import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import _times from 'lodash/times';

import imgCharacter1 from '/public/assets/inventory/characters/character-1.png';
import InventoryCharacterCard from './components/InventoryCharacterCard';

const items = _times(1, i => ({
  id: '#12345678',
  name: `Item ${i}`,
  rarity: 'pink',
  imgSrc: imgCharacter1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const MarketplaceInventoryCharacters: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-2 gap-10">
        {items.map((item, index) => (
          <InventoryCharacterCard key={index} item={item} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryCharacters;
