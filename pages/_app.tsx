import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import Layout from 'components/layout/Layout';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import ModalConfirmation from 'components/modal/ModalConfirmation';
import Head from 'next/head';
import { Provider as ProviderRedux } from 'react-redux';
import { Provider as ProviderEther, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const connectors = () => [new InjectedConnector({ chains: defaultChains })];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      </Head>
      <ProviderEther autoConnect connectors={connectors}>
        <ProviderRedux store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
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
