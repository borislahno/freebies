import styles from './Logo.module.scss';

const Logo = () =>
    <div className={styles.logoBox}>
        <img src="/logo.svg" alt="Lasles VPN logo"/>
        LaslesVPN
    </div>

export default Logo;