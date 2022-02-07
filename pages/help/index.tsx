import { Box } from '@whammytechvn/wt-components';
import { LayoutPageDefault } from 'components/layouts/default/LayoutDefault';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Help: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Help | My Metafarm</title>
        <meta name="description" content="Help | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

Help.Layout = LayoutPageDefault;

export default Help;
