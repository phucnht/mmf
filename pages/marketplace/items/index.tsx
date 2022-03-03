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
import CardPanelItem from 'components/display/card/panel/CardPanelItem';

const MarketplaceItems: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/items/${itemId}`);
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
        <title>Marketplace - Items | My Metafarm</title>
        <meta name="description" content="Marketplace - Items | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-31 gap-4">
        {_map(nftSaleItems, item => {
          return <CardPanelItem key={item.id} item={item} onClick={() => goTo(item.id)} />;
        })}
      </GridBox>
    </>
  );
};

MarketplaceItems.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceItems;
