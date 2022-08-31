import React from 'react';

import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <img className={styles.profilePhoto} src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt=""/>
        </div>
    );
};

export {Profile};