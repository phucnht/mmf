import Head from 'next/head';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

import { GetServerSidePropsContext } from 'next';
import { ObjectProps } from 'utils/types';
import CardLayoutDetail from 'components/display/card/detail/CardPanelDetail';

export interface MarketplaceDetailDetailProps {
  item: ObjectProps;
  external: ObjectProps;
}

export default function MarketplaceItemDetail({ item, external }: MarketplaceDetailDetailProps) {
  return (
    <>
      <Head>
        <title>{item.name} | My Metafarm</title>
        <meta name="description" content={`${item.name} | My Metafarm`} />
      </Head>
      <CardLayoutDetail type="item" item={item} external={external} />
    </>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const res = await fetch(`https://metafarm-api.onsky.services/market-apis/api/sale-items/${query.id}`);
  const { data } = await res.json();

  if (!data) {
    return { notFound: true };
  }

  const resExternal = await fetch(`https://metafarm-api.onsky.services/market-apis/api/items/external/${data.tokenId}`);
  const { data: dataExternal } = await resExternal.json();

  return { props: { item: data, external: dataExternal } };
};

MarketplaceItemDetail.getLayout = getLayoutDefault;
