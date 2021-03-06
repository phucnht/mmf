import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';

import _times from 'lodash/times';
import _random from 'lodash/random';
import _sample from 'lodash/sample';

import imgPants from '/public/assets/inventory/items/pants.png';
import imgHair from '/public/assets/inventory/items/hair.png';
import imgClothes from '/public/assets/inventory/items/clothes.png';
import imgBoots from '/public/assets/inventory/items/boots.png';
import InventoryItemCard from '../../../components/pages/inventory/items/InventoryItemCard';
import { useRouter } from 'next/router';
import useAuthGuard from 'hooks/useAuthGuard';

const items = _times(10, i => ({
  id: '#257578245',
  stars: _random(1, 3),
  element: 'Thunder',
  name: `Item ${i}`,
  rarity: _sample(['blue', 'green', 'pink', 'yellow']),
  breedCount: 3,
  imgSrc: _sample([imgPants, imgHair, imgClothes, imgBoots]),
  priceBNB: 11356,
  priceUSD: 1127
}));

const InventoryItems: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/items/${itemId}`);
  };
  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Items | My Metafarm</title>
        <meta name="description" content="Inventory - Items | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-31 gap-10">
        {items.map((item, index) => (
          <InventoryItemCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryItems.getLayout = getLayoutInventoryInventory;

export default InventoryItems;
