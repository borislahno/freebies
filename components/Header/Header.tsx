import React from "react";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import LinkItem from "../LinkItem/LinkItem";

import styles from './Header.module.scss';
import Button from "../Button/Button";


const Header: React.FC = () => {

    const navigationList = <ul className={styles.list}>
        <LinkItem name='About'/>
        <LinkItem name='Features'/>
        <LinkItem name='Pricing'/>
        <LinkItem name='Testimonials'/>
        <LinkItem name='Help'/>
    </ul>

    return (
        <header className={styles.header}>
            <Container>
                <Logo/>
                <Navigation list={navigationList}/>
                <div className={styles.button}>
                    <a className={styles.signIn} href="#">Sign In</a>
                    <Button className={styles.signUp} name='Sign Up' type='transparent-red'/>
                </div>
            </Container>
        </header>
    );
}

export default Header;