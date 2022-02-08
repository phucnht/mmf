import { Box } from '@whammytechvn/wt-components';
import { getLayoutDefault } from 'components/layouts/pages/getLayoutDefault';
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

Help.getLayout = getLayoutDefault;

export default Help;
