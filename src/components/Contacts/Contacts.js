import React from 'react';

import Contact from "./Contact";
import styles from "./Contacts.module.css"

const Contacts = ({sendId, filteredNicks, randomMessages, getName}) => {

    const contacts = filteredNicks

    contacts.map(contact => {
    randomMessages.map(message => {if (message.id === contact.id){
        contact.uniqueNumber = message.uniqueNumber
    }})
    })

    contacts.sort((a,b)=> a.uniqueNumber < b.uniqueNumber ? 1 : -1)

    return (
        <div>
            <h1>Chats</h1>
            <div className={styles.contacts}>
                {contacts.map(contact => <Contact key={contact.id} contact={contact} getName={getName} sendId={sendId}
                                                  randomMessages={randomMessages}/>)}
            </div>
        </div>
    );
};

export default Contacts;