import Head from 'next/head';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
import CardLayoutDetail from 'components/display/card/detail/CardPanelDetail';
import { ObjectProps } from 'utils/types';
import { GetServerSidePropsContext } from 'next';

export default function MarketplaceLandDetail({ item }: { item: ObjectProps }) {
  return (
    <>
      <Head>
        <title>{item.name} | My Metafarm</title>
        <meta name="description" content={`${item.name} | My Metafarm`} />
      </Head>
      <CardLayoutDetail type="land" item={item} />
    </>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const res = await fetch(`https://metafarm-api.onsky.services/market-apis/api/sale-items/${query.id}`);
  const { data } = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { item: data } };
};

MarketplaceLandDetail.getLayout = getLayoutDefault;
