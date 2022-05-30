import { PublicLayout } from 'layouts';
import { AirdropEvent } from 'models/Airdrop';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { publicRoute } from 'routes';
import { marketSerivce } from 'services';
import { MetaverseEvent } from 'views/Metaverse';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  try {
    const item = await marketSerivce.getAirdropEventById({ id });
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

const Home = ({ item }: { item: AirdropEvent }) => {
  return (
    <PublicLayout>
      <Head>
        <meta property='og:title' content={`${item.name} - Airdrop Event`} key='title' />
        <meta property='og:description' content={item.description} key='description' />
        <meta property='og:image' content={item.image} key='image' />
      </Head>

      <MetaverseEvent item={item} />
    </PublicLayout>
  );
};

export default Home;
