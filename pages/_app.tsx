import '../styles/main.css';

import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import ModalConfirmation from 'components/modal/ModalConfirmation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ModalConfirmation />
    </Provider>
  );
}

export default MyApp;
