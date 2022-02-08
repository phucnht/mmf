import { Box } from '@whammytechvn/wt-components';
import { getLayoutDefault } from 'components/layouts/pages/getLayoutDefault';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Document: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Document | My Metafarm</title>
        <meta name="description" content="Document | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

Document.getLayout = getLayoutDefault;

export default Document;
