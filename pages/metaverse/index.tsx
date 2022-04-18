import Head from 'next/head';
import Image from 'components/display/image/CustomImage';

import { Box, Stack } from '@whammytechvn/wt-components';

import imgMetaverse from 'public/assets/metaverse/metaverse.png';
import { NextPageWithLayout } from 'pages/_app';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
import MetaverseCardList from 'components/pages/metaverse/MetaverseCardList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkIsTester } from 'store/account/auth/auth.api';
import { useAppSelector } from 'store/store.hook';
import { selectAuthData } from 'store/account/auth/auth.slice';

const Metaverse: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { address } = useAppSelector(selectAuthData);

  useEffect(() => {
    // router.push('/dashboard/box');
    checkIsTester(address).then(isTester => {
      if (!isTester) {
        router.push('/');
      } else {
        setLoading(false);
      }
    });
  }, [router, address]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Metaverse | My Meta Farm</title>
        <meta name="description" content="Metaverse | My Meta Farm" />
      </Head>
      <Stack className="flex-col gap-16 layout mx-auto lg:mt-32 z-10">
        <Box className="-mt-48 lg:-mt-56 flex flex-col max-w-[85%] h-auto">
          <Image alt="Welcome Metaverse" src={imgMetaverse} />
        </Box>
        <MetaverseCardList />
      </Stack>
    </>
  );
};

Metaverse.getLayout = getLayoutDefault;

export default Metaverse;
