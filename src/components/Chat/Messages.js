import React, {useEffect, useRef, useState} from 'react';
import styles from "./Messages.module.css"


const Messages = ({letters, random, id, img}) => {

    const [messages, setMessages] = useState([]);
    const chatRef = useRef()

    useEffect(() => {
            setMessages([...letters, ...random])
        }
        ,
        [letters, random])

    messages.sort((a, b) => a.uniqueNumber > b.uniqueNumber ? 1 : -1)
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
    }, [id, letters, random, messages])


    return (
        <div className={styles.messagesBlock} ref={chatRef}>
            {messages.map(message => {
                if (message.id === id) {
                    if (message.message) {
                        return <div key={message.id}>
                            <div className={styles.messageUser}>
                                {message.message}
                            </div>
                            <div className={styles.dateBlockFromUser}>
                                {message.timeShort}
                            </div>
                        </div>
                    } else {
                        return <div>
                            <div className={styles.APIBlock}>
                            <div className={styles.photoBlock}><img className={styles.photo} src={img} alt=""/></div>
                            <div className={styles.messageAPI}>{message.obj.value}</div>
                            </div>
                            <div className={styles.dateBlockFromAPI}>{message.timeShort}</div>
                        </div>
                    }
                }
            })}
        </div>
    );
};

export default Messages;