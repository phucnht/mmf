import { Box, GridBox } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import imgItem from '/public/assets/inventory/airdrop/t-shirt.png';
import _times from 'lodash/times';
import { useRouter } from 'next/router';

const itemsAirdrop = _times(10, i => ({
  id: `${i}`,
  name: `Item ${i}`,
  imgSrc: imgItem
}));

const MarketplaceInventoryAirdrop: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/inventory/airdrop/${itemId}`);
  };

  return (
    <>
      <Head>
        <title>Inventory - Airdrop | My Metafarm</title>
        <meta name="description" content="Inventory - Airdrop | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-32 gap-4">
        {itemsAirdrop.map(item => (
          <Box key={item.id}>
            <Image alt={item.name} src={item.imgSrc} onClick={() => goTo(item.id)} />
          </Box>
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryAirdrop.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryAirdrop;
