import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import imgItem from '/public/assets/inventory/airdrop/t-shirt.png';
import _times from 'lodash/times';
import { useRouter } from 'next/router';
import InventoryAirdropCard from './components/InventoryAirdropCard';

const itemsAirdrop = _times(10, i => ({
  id: `${i}`,
  name: `Item ${i}`,
  imgSrc: imgItem
}));

const InventoryAirdrop: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/airdrop/${itemId}`);
  };

  return (
    <>
      <Head>
        <title>Inventory - Airdrop | My Metafarm</title>
        <meta name="description" content="Inventory - Airdrop | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-32 gap-4">
        {itemsAirdrop.map(item => (
          <InventoryAirdropCard key={item.id} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

InventoryAirdrop.getLayout = getLayoutInventoryInventory;

export default InventoryAirdrop;
