import React from 'react';

import styles from './TitleOfCurrentContact.module.css'
const TitleOfCurrentContact = ({img, name}) => {


    return (
        <div className={styles.title}>
            <div className={styles.photoBlock}>
                {img && <img className={styles.photo} src={img} alt={'photo'}/>}
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};

export {TitleOfCurrentContact};