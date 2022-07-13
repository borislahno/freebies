import React from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import LinkItem from "../LinkItem/LinkItem";

const Footer: React.FC = () =>
    <footer className={styles.footer}>
        <Container>
            <div className={styles.content}>
                <Logo/>
                <p className={styles.text}>LaslesVPN is a private virtual network that has unique features and has high
                    security.</p>
                <div className={styles.socialBox}>
                    <a className={styles.socialIcon} href="#"><i className="icon-facebook"/></a>
                    <a className={styles.socialIcon} href="#"><i className="icon-twitter"/></a>
                    <a className={styles.socialIcon} href="#"><i className="icon-instagram"/></a>
                </div>
                <p className={styles.copyright}>©2020LaslesVPN</p>
            </div>
            <div className={styles.navigationBox}>
                <Navigation list={
                    <ul className={styles.list}>
                        <LinkItem name="Download"/>
                        <LinkItem name="Pricing"/>
                        <LinkItem name="Locations"/>
                        <LinkItem name="Server"/>
                        <LinkItem name="Countries"/>
                        <LinkItem name="Blog"/>
                    </ul>
                }
                            name={<p className={styles.listName}>Product</p>}
                />
                <Navigation list={
                    <ul className={styles.list}>
                        <LinkItem name="LaslesVPN ?"/>
                        <LinkItem name="FAQ"/>
                        <LinkItem name="Tutorials"/>
                        <LinkItem name="About Us"/>
                        <LinkItem name="Privacy Policy"/>
                        <LinkItem name="Terms of Service"/>
                    </ul>
                }
                            name={<p className={styles.listName}>Engage</p>}
                />
                <Navigation list={
                    <ul className={styles.list}>
                        <LinkItem name="Affiliate"/>
                        <LinkItem name="Become Partner"/>
                    </ul>
                }
                            name={<p className={styles.listName}>Earn Money</p>}
                />
            </div>
        </Container>
    </footer>

export default Footer;