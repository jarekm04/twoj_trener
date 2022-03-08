// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "twojtrenerpl-ae88d.firebaseapp.com",
    projectId: "twojtrenerpl-ae88d",
    storageBucket: "twojtrenerpl-ae88d.appspot.com",
    messagingSenderId: "73061267259",
    appId: "1:73061267259:web:f11b58c13e2a76f179691e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
