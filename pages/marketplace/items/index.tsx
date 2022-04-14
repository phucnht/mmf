import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import { LayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/LayoutMarketplaceInventory';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import { getNftSaleItems } from 'store/market/nft-item/nftItem.api';
import { nftSaleItemActions, selectNftSaleItemState } from 'store/market/nft-item/nftSaleItem.slice';
import CardPanelItem from 'components/display/card/panel/CardPanelItem';
import EmptyBanner from 'components/display/empty/EmptyBanner';
import Pagination from 'components/pagination/Pagination';
import axios from 'axios';

const MarketplaceItems: NextPageWithLayout = () => {
  const router = useRouter();

  const goTo = (itemId: string) => {
    router.push(`/marketplace/items/${itemId}`);
  };
  const [exchange, setExchange] = useState('1');

  const getBNBUSDT = async () => {
    const resBnbToUsdt = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');

    if (resBnbToUsdt) {
      setExchange(resBnbToUsdt.data.price);
    }
  };

  const dispatch = useAppDispatch();
  const { data, currentPage, pages } = useAppSelector(selectNftSaleItemState);

  const cb = (page: number) => {
    dispatch(nftSaleItemActions.updatePageSaleItems(page));
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    getBNBUSDT();
    // dispatch(getNftSaleItems({ ...router.query, page: currentPage }));
  }, [dispatch, router.isReady, router.query, currentPage]);

  return (
    <>
      <Head>
        <title>Marketplace - Items | My Metafarm</title>
        <meta name="description" content="Marketplace - Items | My Metafarm" />
      </Head>
      {_isEmpty(data) ? (
        <Box className="h-[48rem]">
          <EmptyBanner title="No items found" />
        </Box>
      ) : (
        <GridBox className="grid-cols-2 lg:grid-cols-fluid-31 gap-8 lg:gap-4">
          {_map(data, item => {
            return <CardPanelItem key={item.id} item={item} onClick={() => goTo(item.id)} exchange={exchange} />;
          })}
        </GridBox>
      )}
      <Pagination index={currentPage} size={pages} cb={cb} className="mt-12" />
    </>
  );
};

MarketplaceItems.getLayout = LayoutMarketplaceInventory;

export default MarketplaceItems;
