import { Box, GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import { useRouter } from 'next/router';
import { LayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/LayoutMarketplaceInventory';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { useEffect } from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import EmptyBanner from 'components/display/empty/EmptyBanner';
import { getNftSaleItems } from 'store/market/nft-item/nftItem.api';
import { selectNftSaleItemData } from 'store/market/nft-item/nftSaleItem.slice';
import CardPanelLand from 'components/display/card/panel/CardPanelLand';

const MarketplaceLands: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/lands/${itemId}`);
  };

  const dispatch = useAppDispatch();
  const nftSaleItems = useAppSelector(selectNftSaleItemData);

  useEffect(() => {
    dispatch(getNftSaleItems(router.query));
  }, [dispatch, router.query]);

  return (
    <>
      <Head>
        <title>Marketplace - Lands | My Metafarm</title>
        <meta name="description" content="Marketplace - Lands | My Metafarm" />
      </Head>
      {_isEmpty(nftSaleItems) ? (
        <Box className="h-[48rem]">
          <EmptyBanner title="No items found" />
        </Box>
      ) : (
        <GridBox className="grid-cols-fluid-48 gap-8">
          {_map(nftSaleItems, item => {
            return <CardPanelLand key={item.id} item={item} onClick={() => goTo(item.id)} />;
          })}
        </GridBox>
      )}
    </>
  );
};

MarketplaceLands.getLayout = LayoutMarketplaceInventory;

export default MarketplaceLands;
