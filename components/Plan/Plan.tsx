import React, {ReactNode} from "react";
import styles from './Plan.module.scss';

type PlanProps = {
    imageUrl: string,
    planName: string,
    planList: string[],
    price?: number,
    button: ReactNode,
}

const Plan: React.FC<PlanProps> = ({imageUrl, planName, planList, price, button}) =>
    <div className={styles.plan}>
        <img className={styles.img} src={imageUrl} alt="Plan image"/>
        <p className={styles.planName}>{planName}</p>
        <ul className={styles.list}>
            {planList.map(item =>
                <li className={styles.item} key={item}>{item}</li>
            )}
        </ul>
        {price ?
            <p className={styles.price}>${price}<span> / mo</span></p>
            : <p className={styles.price}>Free</p>}
        {button}
    </div>

export default Plan;