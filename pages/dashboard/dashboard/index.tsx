import { Container, Flex } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import _times from 'lodash/times';
import imgTimberShoes from '/public/assets/timber/timber-shoes.png';
import imgTimberClothes from '/public/assets/timber/timber-clothes.png';
import { getLayoutDashboard } from 'components/layouts/pages/dashboard/getLayoutDashboard';

import Stats from 'components/display/stats/Stats';
import NumberFormat from 'react-number-format';
import { RecentListBuyerSeller, RecentListLevelBadges } from 'components/pages/dashboard/dashboard/RecentList';

const data1 = _times(10, () => ({
  id: '#29484989',
  imgUrl: imgTimberShoes,
  level: 132,
  stars: 3,
  price: {
    base: 0.0123,
    toUSD: 456.78,
    lastUpdated: 'a few second ago'
  }
}));

const data2 = _times(10, () => ({
  id: '#29484989',
  imgUrl: imgTimberClothes,
  seller: { address: 'Ox294...989' },
  buyer: { address: 'Ox294...989' },
  price: {
    base: 0.0123,
    toUSD: 456.78,
    lastUpdated: 'a few second ago'
  }
}));

const DashboardDashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Buy Box | My Metafarm</title>
        <meta name="description" content="Dashboard - Buy Box | My Metafarm" />
      </Head>
      <Container className="2xl:max-w-[132rem] border-blue-100 border-[3px] rounded-[2rem] px-20 py-[4.5rem]">
        <Flex className="w-full items-start justify-between mb-10">
          {_times(3, i => (
            <Stats
              key={i}
              primary="Total Users"
              secondary={<NumberFormat value={2900000} displayType={'text'} thousandSeparator={true} />}
            />
          ))}
        </Flex>
        <Flex className="w-full items-start justify-between gap-16">
          <RecentListLevelBadges items={data1} />
          <RecentListBuyerSeller items={data2} />
        </Flex>
      </Container>
    </>
  );
};

DashboardDashboard.getLayout = getLayoutDashboard;

export default DashboardDashboard;
