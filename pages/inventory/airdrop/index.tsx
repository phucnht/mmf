import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import useAuthGuard from 'hooks/useAuthGuard';
import InventoryAirdropCardList from './components/InventoryAirdropCardList';

const InventoryAirdrop: NextPageWithLayout = () => {
  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Airdrop | My Metafarm</title>
        <meta name="description" content="Inventory - Airdrop | My Metafarm" />
      </Head>
      <InventoryAirdropCardList />
    </>
  );
};

InventoryAirdrop.getLayout = getLayoutInventoryInventory;

export default InventoryAirdrop;
