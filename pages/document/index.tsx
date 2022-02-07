import { Box } from '@whammytechvn/wt-components';
import { LayoutPageDefault } from 'components/layouts/default/LayoutDefault';
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

Document.Layout = LayoutPageDefault;

export default Document;
