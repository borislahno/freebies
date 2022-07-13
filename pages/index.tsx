import type {NextPage} from 'next'
import Hero from "../components/Hero/Hero";
import Metrics from "../components/Metrics/Metrics";
import About from "../components/About/About";
import TariffPlan from "../components/TariffPlan/TarrifPlan";
import Global from "../components/Global/Global";
import Subscribe from "../components/Subscribe/Subscribe";
import Feedbacks from "../components/Feedbacks/Feedbacks";

const Home: NextPage = () =>
    <>
        <Hero/>
        <Metrics/>
        <About/>
        <TariffPlan/>
        <Global/>
        <Feedbacks/>
        <Subscribe/>
    </>

export default Home;
