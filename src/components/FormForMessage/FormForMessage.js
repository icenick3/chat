import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import firebase from "firebase/compat";

import styles from './FormForMessage.module.css'

const FormForMessage = ({takeLetter, id}) => {


    const [messageFromDb, setMessagesFromDbMessage] = useState([]);
    const {handleSubmit, register, reset} = useForm();
    const [inputValue, setInputValue] = useState(null);

    const db = firebase.database()

    const optionsForLargeDate = {year: 'numeric', month: 'short', day: '2-digit'}
    const optionsForShortDate = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}

    const onSubmit = (data) => {
        if (messageFromDb) {
            if (data.message){
            db.ref('messages').update([...messageFromDb,
                {
                    id: id, timeShort: new Date().toLocaleTimeString("en-US", optionsForShortDate
                    ),
                    uniqueNumber: new Date().getTime(),
                    time: new Date().toLocaleTimeString("en-US", optionsForLargeDate), ...data
                }])
        }} else {
            if (data.message){
            db.ref('messages').update([{
                id: id, timeShort: new Date().toLocaleTimeString("en-US", optionsForShortDate
                ),
                uniqueNumber: new Date().getTime(),
                time: new Date().toLocaleTimeString("en-US", optionsForLargeDate), ...data
            }])
        }}
        setInputValue(null)
        reset()
    }

    useEffect(() => {
        db.ref('messages').on('value', (elem) => setMessagesFromDbMessage(elem.val()))
    }, [])

    useEffect(() => {
        if (messageFromDb) {
            takeLetter([...messageFromDb])
        }
    }, [messageFromDb])

    const onInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={styles.mainBlock}>
            {id && <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input onInput={onInput} className={styles.input} type="text"
                       placeholder={"Type your message..."} {...register('message')}/>
                <button className={styles.btn} disabled={inputValue === null}>
                    <img className={styles.img}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb8wHzBvz2gUn9s0g-5zH7KYOocAYMh9tTw&usqp=CAU"
                         alt=""/>
                </button>
            </form>}
        </div>
    );
};

export {FormForMessage};