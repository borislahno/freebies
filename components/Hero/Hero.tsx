import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";

import styles from './Hero.module.scss';

const Hero: React.FC = () =>
    <section className={styles.hero}>
        <Container>
            <div className={styles.content}>
                <h1 className="heading-primary">Want anything to be easy with LaslesVPN.</h1>
                <p className={styles.text}>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features
                    from us.
                </p>
                <Button className={styles.btn} name="Get Started" type="red"/>
            </div>
            <img className={styles.img} src="/hero/hero.png" alt="Boys with laptop"/>
        </Container>
    </section>

export default Hero;