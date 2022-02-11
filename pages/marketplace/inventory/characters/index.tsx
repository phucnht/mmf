import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryCharacterCard from './components/InventoryCharacterCard';
import { useRouter } from 'next/router';
import mockCharacters from './mockCharacters';

const MarketplaceInventoryCharacters: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (characterId: string) => {
    router.push(`/marketplace/inventory/characters/${characterId}`);
  };

  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8 -mt-8">
        {mockCharacters.map((item, index) => (
          <InventoryCharacterCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryCharacters;
