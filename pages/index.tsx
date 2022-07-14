import type {NextPage} from 'next'
import Hero from "../src/components/Hero/Hero";
import Metrics from "../src/components/Metrics/Metrics";
import About from "../src/components/About/About";
import TariffPlan from "../src/components/TariffPlan/TarrifPlan";
import Global from "../src/components/Global/Global";
import Subscribe from "../src/components/Subscribe/Subscribe";
import Feedbacks from "../src/components/Feedbacks/Feedbacks";
import Head from "next/head";

const Home: NextPage = () =>
	<>
		<Head>
			<title>LaslesVPN | Best VPN in the whole world</title>
			<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
			<meta name="description"
						content="Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us."/>
			<link rel="icon" href="/images/favicon/favicon.svg"/>
			<link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.svg"/>
			<link rel="manifest" href="/manifest.json"/>

		</Head>
		<Hero/>
		<Metrics/>
		<About/>
		<TariffPlan/>
		<Global/>
		<Feedbacks/>
		<Subscribe/>
	</>

export default Home;
