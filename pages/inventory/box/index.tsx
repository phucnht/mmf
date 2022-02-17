import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryBoxCard from './components/InventoryBoxCard';

import _times from 'lodash/times';
import imgBox1 from '/public/assets/inventory/box/box-1.png';
import { useRouter } from 'next/router';
import useAuthGuard from 'hooks/useAuthGuard';

const items = _times(4, () => ({
  id: '257578245',
  name: `Meta Box`,
  breedCount: 3,
  imgSrc: imgBox1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const InventoryBox: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/box/${itemId}`);
  };

  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Box | My Metafarm</title>
        <meta name="description" content="Inventory - Box | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8">
        {items.map((item, index: number) => (
          <InventoryBoxCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryBox.getLayout = getLayoutInventoryInventory;

export default InventoryBox;
