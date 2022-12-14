import Layout from '../layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
