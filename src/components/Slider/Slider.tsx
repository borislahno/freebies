import React, {ReactNode, useState} from "react";
import styles from './Slider.module.scss';
import Feedback from "../Feedback/Feedback";

type SliderProps = {
	count: number,
	items: ReactNode[],
}

const Slider: React.FC<SliderProps> = ({count, items}) => {
	const [position, setPosition] = useState<number>(0);
	const [current, setCurrent] = useState<number>(0);
	const start = -450 * (count - 1);

	const onNextClick = () => {
		if (position > start) {
			setPosition(position - 450)
			setCurrent(current + 1);
		}
	}

	const onPreviousClick = () => {
		if (position < 0) {
			setPosition(position + 450);
			setCurrent(current - 1);
		}
	}
	return (
		<div className={styles.slider}>
			<div className={styles.path} style={{left: `${position}px`}}>
				{items.map(item => item)}
			</div>
			<div className={styles.footer}>
				<div className={styles.pagination}>
					{Array(count).fill(1).map((item, index) => {
						const active = index === current ? styles.active : '';
						return (<div className={`${styles.dot} ${active}`} key={index}/>);
					})}
				</div>
				<div className={styles.control}>
					<i className={`${styles.sliderButton} ${styles.left} icon-leftArrow`} onClick={onPreviousClick}/>
					<i className={`${styles.sliderButton} ${styles.right} icon-rightArrow`} onClick={onNextClick}/>
				</div>
			</div>
		</div>
	);
}

export default Slider;