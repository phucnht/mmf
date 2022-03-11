import { LayoutInventoryInventory } from 'components/layouts/pages/inventory/LayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import useAuthGuard from 'hooks/useAuthGuard';
import InventoryAirdropCardList from 'components/pages/inventory/airdrop/InventoryAirdropCardList';

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

InventoryAirdrop.getLayout = LayoutInventoryInventory;

export default InventoryAirdrop;
