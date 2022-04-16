import { GridBox } from '@whammytechvn/wt-components';
import { LayoutInventoryInventory } from 'components/layouts/pages/inventory/LayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryLandCard from '../../../components/pages/inventory/lands/InventoryLandCard';

import _times from 'lodash/times';
import _random from 'lodash/random';
import imgLand1 from 'public/assets/items/lands/land-1.png';
import { useRouter } from 'next/router';
import useAuthGuard from 'hooks/useAuthGuard';

const items = _times(4, () => ({
  id: '257578245',
  name: `Kythira`,
  stars: _random(1, 3),
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
        <title>Inventory - Lands | My Meta Farm</title>
        <meta name="description" content="Inventory - Lands | My Meta Farm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8">
        {items.map((item, index: number) => (
          <InventoryLandCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryLands.getLayout = LayoutInventoryInventory;

export default InventoryLands;
