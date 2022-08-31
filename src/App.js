import React, {useState} from "react";

import {Chat, ContactsList, FormForMessage, FormForSearch, Profile, TitleOfCurrentContact} from "./components";
import {Users} from "./components/Contacts/ContactConstructor";
import styles from './App.module.css';


function App() {

    const [img, setImg] = useState(null);
    const [letters, setLetters] = useState([]);
    const [id, setId] = useState(null)
    const [filteredNicks, setFilteredNicks] = useState(Users)
    const [randomMessages, setRandomMessages] = useState([])
    const [name, setName] = useState(null)


    const sendId = (img, id) => {
        setImg(img)
        setId(id)
    }
    const takeLetter = (letter) => {
        setLetters(letter)

    }

    const getNickname = (data) => {
        let filtered = Users.filter(nick => nick.name.toLowerCase().includes(data.toLowerCase()))
        setFilteredNicks(filtered)
    }
    const getRandomMessage = (randomMessage) => {
        setRandomMessages(randomMessage)
    }
    const getName = (name) => {
        setName(name)
    }
    return (
        <div className={styles.globalBlock}>
            <div className={styles.w500}>
                <div className={styles.header}>

                    <Profile/>
                    <FormForSearch getNickname={getNickname}/>
                </div>
                <ContactsList getName={getName} sendId={sendId} filteredNicks={filteredNicks}
                              randomMessages={randomMessages}/>
            </div>
            <div className={styles.w1000}>
                <TitleOfCurrentContact img={img} name={name}/>
                <Chat letters={letters} id={id} getRandomMessage={getRandomMessage} img={img}/>
                <FormForMessage takeLetter={takeLetter} id={id}/>
            </div>
        </div>
    )
}

export default App;

