import Layout from '@/components/Layout';
import '../styles/globals.css';
import '../styles/page.module.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}