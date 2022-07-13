import React from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from './Subscribe.module.scss';

const Subscribe: React.FC = () =>
    <section className={styles.subscribe}>
        <Container>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} heading-secondary`}>Subscribe Now for Get Special Features!</h2>
                    <p className={styles.text}>Let's subscribe with us and find the fun.</p>
                </div>
                <Button className={styles.button} name={'Subscribe Now'} type="red"/>
            </div>
        </Container>
    </section>

export default Subscribe;