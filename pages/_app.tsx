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
import { ReactElement, ReactNode } from 'react';
import AppLayout from 'components/layouts/app/AppLayout';
import NextNProgress from 'nextjs-progressbar';
import { PersistGate } from 'redux-persist/integration/react';
import Script from 'next/script';

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
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P734JPJ');
        `}
      </Script>
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
        <PersistGate loading={<>Loading...</>} persistor={persistor}>
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
        </PersistGate>
      </ProviderRedux>
    </>
  );
}

export default MyApp;
