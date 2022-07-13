import React from 'react';
import styles from './Feedbacks.module.scss';
import Container from "../Container/Container";
import Slider from "../Slider/Slider";
import Feedback from "../Feedback/Feedback";

const Feedbacks: React.FC = () => {

    const sliderItems = [
        <Feedback
            key="customer1"
            imgUrl="/feedback/customer1.jpg"
            customerName="Viezh Robert"
            location="Warsaw, Poland"
            mark={4.5}
            text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />,
        <Feedback
            key="customer2"
            imgUrl="/feedback/customer2.jpg"
            customerName="Yessica Christy"
            location="Shanxi, China"
            mark={4.5}
            text="“I like it because I like to travel far and still can connect with high speed.”."
        />,
        <Feedback
            key="customer3"
            imgUrl="/feedback/customer3.jpg"
            customerName="Kim Young Jou"
            location="Seoul, South Korea"
            mark={4.7}
            text="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
        />,
        <Feedback
            key="customer4"
            imgUrl="/feedback/customer4.jpg"
            customerName="Liam Bower"
            location="New York, USA"
            mark={4.3}
            text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
    ];

    return (
        <section className={styles.feedback}>
            <Container>
                <h2 className={`${styles.title} heading-secondary`}>Trusted by Thousands of Happy Customer</h2>
                <p className={styles.text}>These are the stories of our customers who have joined us with great pleasure
                    when
                    using this crazy
                    feature.
                </p>
                <Slider count={sliderItems.length} items={sliderItems}/>
            </Container>
        </section>
    );
}

export default Feedbacks;
