import React, {useEffect, useState} from 'react';
import axios from "axios";
import firebase from "firebase/compat";

import styles from "./Chat.module.css"
import Messages from "./Messages";

const Chat = ({letters, id, getRandomMessage, img}) => {


        const [random, setRandom] = useState([])
        const db = firebase.database()
        const randomNumber = Math.floor(Math.random() * 10000)
        const optionsForLargeDate = {year: 'numeric', month: 'short', day: '2-digit'}
        const optionsForShortDate = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}


        useEffect(() => {
            if (id) {
                axios.get(`https://api.chucknorris.io/jokes/random`).then(value => value.data)
                    .then(obj =>
                        setTimeout(() => db.ref('messagesFromAPI').update([...random, {
                            id: id,
                            uniqueNumber: new Date().getTime(),
                            time: new Date().toLocaleTimeString("en-US", optionsForLargeDate),
                            timeShort: new Date().toLocaleTimeString("en-US", optionsForShortDate),
                            obj
                        }]),
                            randomNumber),
                    )
            }
        },
            [letters])

        useEffect(() => {
            db.ref(`/messagesFromAPI`).on('value', (elem) => setRandom(elem.val()))
        }, [])

        const sendMessage = () => {
            getRandomMessage(random)
        }
        sendMessage()

        return (
            <div className={styles.chatsWindow}>
                <Messages letters={letters} random={random} id={id} img={img}/>
            </div>
        );
    };

export {Chat};