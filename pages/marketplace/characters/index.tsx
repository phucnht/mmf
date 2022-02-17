import { GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryCharacterCard from './components/MarketplaceCharacterCard';
import { useRouter } from 'next/router';
import mockCharacters from './mockCharacters';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';

const MarketplaceCharacters: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (characterId: string) => {
    router.push(`/marketplace/characters/${characterId}`);
  };

  return (
    <>
      <Head>
        <title>Marketplace - Characters | My Metafarm</title>
        <meta name="description" content="Marketplace - Characters | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8 -mt-8">
        {mockCharacters.map((item, index) => (
          <InventoryCharacterCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceCharacters;
