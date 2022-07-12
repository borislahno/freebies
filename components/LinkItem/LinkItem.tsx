import React from 'react';
import styles from './LinkItem.module.scss';

type LinkItemProps = {
    name: string,
}

const LinkItem: React.FC<LinkItemProps> = ({name}) =>
    <li>
        <a className={styles.link} href="#">{name}</a>
    </li>

export default LinkItem;