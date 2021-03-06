import { GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryCharacterCard from '../../../components/pages/marketplace/characters/MarketplaceCharacterCard';
import { useRouter } from 'next/router';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';
import imgCharacter1 from '/public/assets/inventory/characters/character-1.png';
import imgCharacter2 from '/public/assets/inventory/characters/character-2.png';
import imgCharacter3 from '/public/assets/inventory/characters/character-3.png';

export const mockCharacters = [
  {
    id: '123456781',
    ownerId: '0x4873982792s',
    name: 'Myrtle Huff',
    rarity: 'pink',
    imgSrc: imgCharacter1,
    priceBNB: 11356,
    priceUSD: 1127
  },
  {
    id: '123456782',
    ownerId: '0x4873982792s',
    name: 'Caroline Logan',
    rarity: 'pink',
    imgSrc: imgCharacter2,
    priceBNB: 11356,
    priceUSD: 1127
  },
  {
    id: '123456783',
    ownerId: '0x4873982792s',
    name: 'Jana Warner',
    rarity: 'pink',
    imgSrc: imgCharacter3,
    priceBNB: 11356,
    priceUSD: 1127
  }
];

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
