import React from "react";
import styles from './Global.module.scss';
import Container from "../Container/Container";

const Global: React.FC = () =>
	<section className={styles.global}>
		<Container>
			<h2 className={`${styles.title} heading-secondary`}>Huge Global Network of Fast VPN</h2>
			<p className={styles.text}>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
			<div className={`${styles.img} iad`}>
				<img src="/images/global/global.webp" alt="World map"/>
			</div>
			<div className={styles.companiesBox}>
				<img className={styles.companyLogo} src="/images/global/netflix.webp" alt="Netflix logo"/>
				<img className={styles.companyLogo} src="/images/global/reddit.webp" alt="Netflix logo"/>
				<img className={styles.companyLogo} src="/images/global/amazon.webp" alt="Netflix logo"/>
				<img className={styles.companyLogo} src="/images/global/discord.webp" alt="Netflix logo"/>
				<img className={styles.companyLogo} src="/images/global/spotify.webp" alt="Netflix logo"/>
			</div>
		</Container>
	</section>

export default Global;
