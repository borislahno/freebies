import React from "react";
import Container from "../Container/Container";
import styles from './About.module.scss';

const About: React.FC = () =>
	<section className={styles.about}>
		<Container>
			<div className={`${styles.img} iad`}>
				<img src="/images/about/about.webp" alt="Boy with laptop"/>
			</div>
			<div className={styles.content}>
				<h2 className="heading-secondary">We Provide Many Features You Can Use</h2>
				<p className={styles.text}>You can explore the features that we provide with fun and have their own
					functions each feature.</p>
				<ul className={styles.list}>
					<li className={`${styles.item} icon-mark`}>Powerfull online protection.</li>
					<li className={`${styles.item} icon-mark`}>Internet without borders.</li>
					<li className={`${styles.item} icon-mark`}>Supercharged VPN</li>
					<li className={`${styles.item} icon-mark`}>No specific time limits.</li>
				</ul>
			</div>
		</Container>
	</section>

export default About;