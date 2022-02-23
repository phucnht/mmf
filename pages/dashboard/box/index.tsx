import { GridBox } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import _times from 'lodash/times';
import imgBox1 from '/public/assets/inventory/box/box-1.png';
import { useRouter } from 'next/router';
import { getLayoutDashboard } from 'components/layouts/pages/dashboard/getLayoutDashboard';
import DashboardBoxCard from 'components/pages/dashboard/box/DashboardBoxCard';

const items = _times(4, () => ({
  id: '257578245',
  name: `Meta Box`,
  breedCount: 3,
  imgSrc: imgBox1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const DashboardBox: NextPageWithLayout = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/dashboard/box/${itemId}`);
  };

  return (
    <>
      <Head>
        <title>Dashboard - Buy Box | My Metafarm</title>
        <meta name="description" content="Dashboard - Buy Box | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-42 gap-8">
        {items.map((item, index: number) => (
          <DashboardBoxCard key={index} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
    </>
  );
};

DashboardBox.getLayout = getLayoutDashboard;

export default DashboardBox;
