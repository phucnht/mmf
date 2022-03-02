import Head from 'next/head';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

import { GetServerSidePropsContext } from 'next';
import { ObjectProps } from 'utils/types';
import CardLayoutItem from 'components/display/card/layout/CardLayoutItem';

export interface MarketplaceDetailDetailProps {
  item: ObjectProps;
}

export default function MarketplaceItemDetail({ item }: MarketplaceDetailDetailProps) {
  return (
    <>
      <Head>
        <title>{item.name} | My Metafarm</title>
        <meta name="description" content={`${item.name} | My Metafarm`} />
      </Head>
      <CardLayoutItem type="item" item={item} />
    </>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const res = await fetch(`https://metafarm-api.onsky.services/market-apis/api/sale-items/${query.id}`);
  const { data } = await res.json();
  return { props: { item: data } };
};

MarketplaceItemDetail.getLayout = getLayoutDefault;
