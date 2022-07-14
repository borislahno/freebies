import '../src/styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../src/components/Layout/layout";

const MyApp = ({Component, pageProps}: AppProps) =>
	<Layout>
		<Component {...pageProps} />
	</Layout>

export default MyApp
