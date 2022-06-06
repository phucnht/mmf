import { PublicLayout } from 'layouts';
import { ItemType } from 'models/Item';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { publicRoute } from 'routes';
import { marketSerivce } from 'services';
import { ItemView } from 'views/ItemView';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  try {
    const item = await marketSerivce.getItemById({ id });
    return { props: { item } };
  } catch (error) {
    return {
      redirect: {
        destination: publicRoute.home.path,
        permanent: false,
      },
    };
  }
};

const Home = ({ item }: { item: ItemType }) => {
  return (
    <PublicLayout>
      <Head>
        <meta property='og:title' content={`${item.name} - Airdrop Event`} key='title' />
        <meta property='og:description' content={item.description} key='description' />
        <meta property='og:image' content={item.external.iconUrl} key='image' />
      </Head>

      <ItemView item={item} />
    </PublicLayout>
  );
};

export default Home;
