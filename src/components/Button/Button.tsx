import React from "react";
import styles from './Button.module.scss';

type ButtonProps = {
	name: string,
	type: 'transparent-red' | 'red' | 'red-radius-50',
	className?: string,
}

const Button: React.FC<ButtonProps> = ({name, type, className}) =>
	<a className={`${styles.btn} ${styles[type]} ${className || ''}`} href="src/components/Button/Button#">{name}</a>

export default Button;