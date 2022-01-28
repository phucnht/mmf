import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import MainLayout from 'layouts/main/MainLayout';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import ModalConfirmation from 'components/modal/ModalConfirmation';
import Head from 'next/head';
import { Provider as ProviderRedux } from 'react-redux';
import { Provider as ProviderEther, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

const connectors = () => [new InjectedConnector({ chains: defaultChains })];

export type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.Layout || (page => page);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <ProviderEther autoConnect connectors={connectors}>
        <ProviderRedux store={store}>
          <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
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
      </ProviderEther>
    </>
  );
}

export default MyApp;
