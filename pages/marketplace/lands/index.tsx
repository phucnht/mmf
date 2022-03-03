import { Box, GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

// import imgLand1 from '/public/assets/inventory/lands/land-1.png';
import { useRouter } from 'next/router';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { useEffect } from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import EmptyBanner from 'components/display/empty/EmptyBanner';
import { getNftSaleItems } from 'store/market/nft-item/nftItem.api';
import { selectNftSaleItemData } from 'store/market/nft-item/nftSaleItem.slice';
import CardPanelLand from 'components/display/card/panel/CardPanelLand';

// export const mockLands = [
//   {
//     id: '257578245',
//     name: `Kythira 1`,
//     stars: 3,
//     breedCount: 3,
//     imgSrc: imgLand1,
//     priceBNB: 11356,
//     priceUSD: 1127
//   },
//   {
//     id: '257578244',
//     name: `Kythira 2`,
//     stars: 2,
//     breedCount: 3,
//     imgSrc: imgLand1,
//     priceBNB: 11356,
//     priceUSD: 1127
//   }
// ];

const MarketplaceLands: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/lands/${itemId}`);
  };

  const dispatch = useAppDispatch();
  const nftSaleItems = useAppSelector(selectNftSaleItemData);

  useEffect(() => {
    dispatch(getNftSaleItems());
  }, [dispatch]);

  if (_isEmpty(nftSaleItems)) {
    return (
      <Box className="h-[48rem]">
        <EmptyBanner title="No items found" />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Marketplace - Lands | My Metafarm</title>
        <meta name="description" content="Marketplace - Lands | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-48 gap-8">
        {_map(nftSaleItems, item => {
          return <CardPanelLand key={item.id} item={item} onClick={() => goTo(item.id)} />;
        })}
      </GridBox>
    </>
  );
};

MarketplaceLands.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceLands;
