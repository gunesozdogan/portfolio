import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
