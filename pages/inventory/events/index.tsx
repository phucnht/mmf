import { Box } from '@whammytechvn/wt-components';
import { LayoutInventoryInventory } from 'components/layouts/pages/inventory/LayoutInventoryInventory';
import useAuthGuard from 'hooks/useAuthGuard';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const InventoryEvents: NextPageWithLayout = () => {
  useAuthGuard();

  return (
    <>
      <Head>
        <title>Inventory - Events | My Metafarm</title>
        <meta name="description" content="Inventory - Events | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

InventoryEvents.getLayout = LayoutInventoryInventory;

export default InventoryEvents;
