import React from "react";
import styles from './Feedback.module.scss';

type FeedbackProps = {
    imgUrl: string,
    customerName: string,
    location: string,
    mark: number,
    text: string,
}

const Feedback: React.FC<FeedbackProps> = ({imgUrl, customerName, location, mark, text}) =>
    <div className={styles.feedback}>
        <div className={styles.header}>
            <div className={styles.customer}>
                <img className={styles.img} src={imgUrl} alt="Customer image"/>
                <div className={styles.customerInfo}>
                    <p className={styles.name}>{customerName}</p>
                    <p className={styles.location}>{location}</p>
                </div>
            </div>
            <p className={styles.mark}>
                {mark}
                <i className="icon-star"/>
            </p>
        </div>
        <p className={styles.text}>
            {text}
        </p>
    </div>

export default Feedback;