import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';
import 'node_modules/video-react/dist/video-react.css';
import 'animate.css/animate.min.css';

import type { AppProps } from 'next/app';
import { persistor, store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import ModalConfirmation from 'components/modal/ModalConfirmation';
import Head from 'next/head';
import { Provider as ProviderRedux } from 'react-redux';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import AppLayout from 'components/layouts/app/AppLayout';
import NextNProgress from 'nextjs-progressbar';
import { PersistGate } from 'redux-persist/integration/react';
import TagManager from 'react-gtm-module';
import queryClient from 'utils/queryClient';
import { QueryClientProvider } from 'react-query';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P734JPJ' });
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/logos/favicon.ico" />
      </Head>
      <NextNProgress
        color="#ffc400dd"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: 'ease', speed: 500 }}
      />
      <ProviderRedux store={store}>
        <PersistGate loading={<>Loading...</>} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="text-sm"
            />
          </QueryClientProvider>
          <ModalConfirmation />
        </PersistGate>
      </ProviderRedux>
    </>
  );
}

export default MyApp;
