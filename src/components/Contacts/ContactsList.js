import React from 'react';

import Contacts from "./Contacts";
import styles from "./ContactsList.module.css"

const ContactsList = ({sendId, filteredNicks,randomMessages, getName}) => {
    return (
        <div className={styles.contactsList}>
            <Contacts getName={getName} randomMessages={randomMessages} sendId={sendId} filteredNicks={filteredNicks}/>
        </div>
    );
};

export {ContactsList};