import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import { LayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/LayoutMarketplaceInventory';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import { nftSaleItemActions, selectNftSaleItemState } from 'store/market/nft-item/nftSaleItem.slice';
import CardPanelItem from 'components/display/card/panel/CardPanelItem';
import EmptyBanner from 'components/display/empty/EmptyBanner';
import Pagination from 'components/pagination/Pagination';
import axios from 'axios';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { checkIsTester } from 'store/account/auth/auth.api';

const MarketplaceItems: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { address } = useAppSelector(selectAuthData);

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
    // router.push('/dashboard/box');
    checkIsTester(address).then(isTester => {
      if (!isTester) {
        router.push('/');
      } else {
        setLoading(false);
      }
    });
  }, [router, address]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    getBNBUSDT();
    // dispatch(getNftSaleItems({ ...router.query, page: currentPage }));
  }, [dispatch, router.isReady, router.query, currentPage]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Marketplace - Items | My Meta Farm</title>
        <meta name="description" content="Marketplace - Items | My Meta Farm" />
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
