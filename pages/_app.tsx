import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout/layout";

const MyApp = ({ Component, pageProps }: AppProps) =>
  <Layout>
    <Component {...pageProps} />
  </Layout>

export default MyApp
