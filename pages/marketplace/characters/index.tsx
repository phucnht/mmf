import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import EmptyBanner from 'components/display/empty/EmptyBanner';

import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import { getNftSaleItems } from 'store/market/nft-item/nftItem.api';
import { selectNftSaleItemData } from 'store/market/nft-item/nftSaleItem.slice';
import CardPanelCharacter from 'components/display/card/panel/CardPanelCharacter';

const MarketplaceCharacters: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (characterId: string) => {
    router.push(`/marketplace/characters/${characterId}`);
  };

  const dispatch = useAppDispatch();
  const nftSaleItems = useAppSelector(selectNftSaleItemData);

  useEffect(() => {
    dispatch(getNftSaleItems(router.query));
  }, [dispatch, router.query]);

  return (
    <>
      <Head>
        <title>Marketplace - Characters | My Metafarm</title>
        <meta name="description" content="Marketplace - Characters | My Metafarm" />
      </Head>
      {_isEmpty(nftSaleItems) ? (
        <Box className="h-[48rem]">
          <EmptyBanner title="No items found" />
        </Box>
      ) : (
        <GridBox className="grid-cols-fluid-48 gap-8 -mt-8">
          {_map(nftSaleItems, item => {
            return <CardPanelCharacter key={item.id} item={item} onClick={() => goTo(item.id)} />;
          })}
        </GridBox>
      )}
    </>
  );
};

MarketplaceCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceCharacters;
