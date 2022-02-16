import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import ModalConfirmation from 'components/modal/ModalConfirmation';
import Head from 'next/head';
import { Provider as ProviderRedux } from 'react-redux';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import AppLayout from 'components/layouts/app/AppLayout';
import NextNProgress from 'nextjs-progressbar';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/logos/favicon.ico" />
      </Head>
      <NextNProgress
        color="#0B2F51"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: 'ease', speed: 500 }}
      />
      <ProviderRedux store={store}>
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
        <ModalConfirmation />
      </ProviderRedux>
    </>
  );
}

export default MyApp;
