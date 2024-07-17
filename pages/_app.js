import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>Junior Adessu&apos;s Tech Journey | Web Development & Cybersecurity Insights</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
