import { GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryLandCard from './components/MarketplaceLandCard';

import _times from 'lodash/times';
import imgLand1 from '/public/assets/inventory/lands/land-1.png';
import { useRouter } from 'next/router';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';

const items = _times(4, () => ({
  id: '257578245',
  name: `Kythira`,
  breedCount: 3,
  imgSrc: imgLand1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const MarketplaceLands: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/lands/${itemId}`);
  };

  return (
    <>
      <Head>
        <title>Marketplace - Lands | My Metafarm</title>
        <meta name="description" content="Marketplace - Lands | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8">
        {items.map((item, index: number) => (
          <InventoryLandCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceLands.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceLands;
