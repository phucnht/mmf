import { LayoutPageDefault } from 'components/layouts/default/LayoutDefault';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact | My Metafarm</title>
        <meta name="description" content="Contact | My Metafarm" />
      </Head>
    </>
  );
};

Contact.Layout = LayoutPageDefault;

export default Contact;
