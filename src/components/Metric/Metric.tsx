import React from "react";
import styles from './Metric.module.scss';

type MetricProps = {
	name: string,
	icon: string,
	count: number,
}

const Metric: React.FC<MetricProps> = ({name, icon, count}) =>
	<div className={styles.metric}>
		<div className={styles.icon}>
			<i className={icon}/>
		</div>
		<div className={styles.content}>
			<p className={styles.count}>{count}+</p>
			<p className={styles.name}>{name}</p>
		</div>
	</div>

export default Metric;