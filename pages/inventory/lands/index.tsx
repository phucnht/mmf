import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryLandCard from './components/InventoryLandCard';

import _times from 'lodash/times';
import imgLand1 from '/public/assets/inventory/lands/land-1.png';
import { useRouter } from 'next/router';
import useAuthGuard from 'hooks/useAuthGuard';

const items = _times(4, () => ({
  id: '257578245',
  name: `Kythira`,
  breedCount: 3,
  imgSrc: imgLand1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const InventoryLands: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/lands/${itemId}`);
  };

  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Lands | My Metafarm</title>
        <meta name="description" content="Inventory - Lands | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8">
        {items.map((item, index: number) => (
          <InventoryLandCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryLands.getLayout = getLayoutInventoryInventory;

export default InventoryLands;
