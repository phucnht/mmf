import { Box } from '@whammytechvn/wt-components';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Token: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Token | My Metafarm</title>
        <meta name="description" content="Token | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

Token.getLayout = getLayoutDefault;

export default Token;
