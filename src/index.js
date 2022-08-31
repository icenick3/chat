import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat";



const firebaseConfig = {
    apiKey: "AIzaSyBGET30HE8PTrFsTdjA_C2rXIzu21YZ8h0",
    authDomain: "chat-f83f1.firebaseapp.com",
    databaseURL: "https://chat-f83f1-default-rtdb.firebaseio.com",
    projectId: "chat-f83f1",
    storageBucket: "chat-f83f1.appspot.com",
    messagingSenderId: "624338944586",
    appId: "1:624338944586:web:ddba59c8a4e09eb4809cb3"

}

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


