import Head from 'next/head';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

import { GetServerSideProps } from 'next';
import CardLayoutDetail from 'components/display/card/detail/CardPanelDetail';
import { ObjectProps } from 'utils/types';

export interface InventoryCharacterDetailProps {
  item: ObjectProps;
}

export default function InvnetoryCharacterDetail({ item }: InventoryCharacterDetailProps) {
  return (
    <>
      <Head>
        <title>{item.name} | My Metafarm</title>
        <meta name="description" content={`${item.name} | My Metafarm`} />
      </Head>
      <CardLayoutDetail type="character" item={item} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`https://metafarm-api.onsky.services/market-apis/api/sale-items/${query.id}`);
  const { data } = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { item: data } };
};

InvnetoryCharacterDetail.getLayout = getLayoutDefault;
