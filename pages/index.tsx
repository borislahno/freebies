import type {NextPage} from 'next'
import Hero from "../components/Hero/Hero";
import Metrics from "../components/Metrics/Metrics";
import About from "../components/About/About";
import TariffPlan from "../components/TariffPlan/TarrifPlan";

const Home: NextPage = () =>
    <>
        <Hero/>
        <Metrics/>
        <About/>
        <TariffPlan/>
    </>

export default Home;
