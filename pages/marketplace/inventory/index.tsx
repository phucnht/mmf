import { GridBox } from '@whammytechvn/wt-components';
import LayoutMarketplace from 'components/layouts/marketplace/LayoutMarketplace';
import _times from 'lodash/times';
import Head from 'next/head';
import Image from 'next/image';
import { NextPageWithLayout } from 'pages/_app';
import imgItem from '/public/assets/items/item-1.png';

const items = _times(10, i => ({
  id: i,
  name: `Item ${i}`,
  imgSrc: imgItem
}));

const Inventory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory | My Metafarm</title>
        <meta name="description" content="Inventory | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid">
        {items.map(item => (
          <Image key={item.id} alt={item.name} src={item.imgSrc} />
        ))}
      </GridBox>
    </>
  );
};

Inventory.Layout = LayoutMarketplace;

export default Inventory;
