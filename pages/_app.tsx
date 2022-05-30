import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppTheme } from 'containers';
import NextProgress from 'next-progress';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'styles/App.scss';
import 'tailwindcss/tailwind.css';

type EmotionAppProps = AppProps & {
  emotionCache: EmotionCache;
};

const App = ({ Component, emotionCache = createCache({ key: 'css' }), pageProps }: EmotionAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My Meta Farm</title>
      </Head>
      <AppTheme>
        <CssBaseline />
        <Component {...pageProps} />
        <NextProgress delay={300} options={{ showSpinner: false }} />
      </AppTheme>
    </CacheProvider>
  );
};

export default App;
