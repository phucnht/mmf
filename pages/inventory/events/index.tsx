import { Box } from '@whammytechvn/wt-components';
import { getLayoutInventoryInventory } from 'components/layouts/pages/inventory/getLayoutInventoryInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const InventoryEvents: NextPageWithLayout = () => {
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

InventoryEvents.getLayout = getLayoutInventoryInventory;

export default InventoryEvents;
