// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4SW0wDTBBw9JzaEAYQS6TwXtbI4vCP1Q",
    authDomain: "projektdemo-1b4ad.firebaseapp.com",
    databaseURL: "https://projektdemo-1b4ad-default-rtdb.firebaseio.com",
    projectId: "projektdemo-1b4ad",
    storageBucket: "projektdemo-1b4ad.appspot.com",
    messagingSenderId: "1023060235555",
    appId: "1:1023060235555:web:7c82888c31c61579962896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();