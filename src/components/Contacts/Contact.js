import React, {useEffect, useState} from 'react';

import styles from "./Contact.module.css"

const Contact = ({contact: {id, name, img}, sendId, randomMessages,getName}) => {

    const [messagesFromAPI, setMessagesFromAPI] = useState([]);

    useEffect(() => {
        randomMessages.map(message => {
            setMessagesFromAPI([...messagesFromAPI, message.uniqueNumber])
        })
    }, [randomMessages])

    let maxNumber = null

    randomMessages.map(message => {
        if (message.id === id) {
            if (messagesFromAPI.map(number => number === message.uniqueNumber)) {
                maxNumber = message.uniqueNumber
            }
        }
    })

    return (
        <div className={styles.contactBlock}>
            <button onClick={() => {
                sendId(img, id)
                getName(name)
            }} className={styles.btn}>
                <div className={styles.contactsData}>
                    <img className={styles.photo} src={img} alt=""/>
                    <p className={styles.name}>{name}</p>
                    {randomMessages.map(message => {
                        if (message.uniqueNumber === maxNumber) {
                            return <div key={message.id}>
                                <p className={styles.messageTime}>{message.time}</p>
                                <p className={styles.messageText}>{message.obj.value.substring(0,50) + '...'}</p>
                            </div>
                        }
                    })}
                </div>
            </button>
            <hr/>
        </div>
    );
};

export default Contact;