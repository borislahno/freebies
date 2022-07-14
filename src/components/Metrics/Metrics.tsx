import React from "react";
import Container from "../Container/Container";
import Metric from "../Metric/Metric";

import styles from "./Metrics.module.scss";

const Metrics: React.FC = () =>
	<section className={styles.metrics}>
		<Container>
			<div className={styles.content}>
				<Metric name="Users" icon="icon-user" count={90}/>
				<div className={styles.verticalLine}></div>
				<Metric name="Locations" icon="icon-address" count={30}/>
				<div className={styles.verticalLine}></div>
				<Metric name="Servers" icon="icon-server" count={50}/>
			</div>
		</Container>
	</section>

export default Metrics;