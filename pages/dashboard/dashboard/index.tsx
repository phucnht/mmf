import { Box, Container, Flex } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import Image from 'next/image';

import _times from 'lodash/times';
import imgTimberShoes from 'public/assets/timber/timber-shoes.png';
import imgTimberClothes from 'public/assets/timber/timber-clothes.png';
import icnPrice from 'public/assets/dashboard/icon-price.png';
import { getLayoutDashboard } from 'components/layouts/pages/dashboard/getLayoutDashboard';

import Stats from 'components/display/stats/Stats';
import NumberFormat from 'react-number-format';
import { RecentListBuyerSeller } from 'components/pages/dashboard/dashboard/RecentList';
import { useQuery } from 'react-query';
import { clientMarket } from 'utils/api';
import { useState } from 'react';

const DashboardDashboard: NextPageWithLayout = () => {
  const [search] = useState({ fromDate: 0, toDate: Date.now() });
  const { data = {} } = useQuery(['/statistics', search], () =>
    clientMarket.get(`/statistics`, { params: search })
  ) as any;

  return (
    <>
      <Head>
        <title>Dashboard | My Meta Farm</title>
        <meta name="description" content="Dashboard | My Meta Farm" />
      </Head>
      <Box className="layout border-blue-100 border-[3px] rounded-[2rem] px-20 py-[4.5rem]">
        <Flex className="w-full items-start justify-between gap-10 mb-10">
          <Stats
            icon={<Image src={icnPrice} alt="icon" />}
            primary="Transactions"
            secondary={<NumberFormat value={data.numberOfTrace} displayType={'text'} thousandSeparator={true} />}
          />
          <Stats
            icon={<Image src={icnPrice} alt="icon" />}
            primary="Total Volume"
            secondary={
              <NumberFormat value={data.totalVolume} displayType={'text'} thousandSeparator={true} prefix="$" />
            }
          />
          <Stats
            icon={<Image src={icnPrice} alt="icon" />}
            primary="Average Price"
            secondary={<NumberFormat value={data.avgPrice} displayType={'text'} thousandSeparator={true} prefix="$" />}
          />
        </Flex>
        <Flex className="w-full items-start justify-between gap-16">
          <RecentListBuyerSeller />
        </Flex>
      </Box>
    </>
  );
};

DashboardDashboard.getLayout = getLayoutDashboard;

export default DashboardDashboard;
