import { Box } from '@whammytechvn/wt-components';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact | My Metafarm</title>
        <meta name="description" content="Contact | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  };
};

Contact.getLayout = getLayoutDefault;

export default Contact;
