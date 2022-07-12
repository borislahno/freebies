import React from "react";
import Container from "../Container/Container";
import styles from './TariffPlan.module.scss';
import Plan from "../Plan/Plan";
import Button from "../Button/Button";

const TariffPlan: React.FC = () =>
    <section className={styles.tariffPlan}>
        <Container>
            <h2 className="heading-secondary">Choose Your Plan</h2>
            <p className={styles.text}>Let's choose the package that is best for you and explore it happily and
                cheerfully.</p>
            <div className={styles.plansBox}>
                <Plan
                    imageUrl='/plan/plan1.png'
                    planName='Free Plan'
                    planList={['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']}
                    button={
                        <Button className={styles.button} name='Select' type='transparent-red'/>
                    }
                />
                <Plan
                    imageUrl='/plan/plan2.png'
                    planName='Standard Plan'
                    price={9}
                    planList={['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware']}
                    button={
                        <Button className={styles.button} name='Select' type='transparent-red'/>
                    }
                />
                <Plan
                    imageUrl='/plan/plan3.png'
                    planName='Premium Plan'
                    price={12}
                    planList={['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features']}
                    button={
                        <Button className={styles.button} name='Select' type='red-radius-50'/>
                    }
                    className={styles.select}
                />
            </div>
        </Container>
    </section>

export default TariffPlan;