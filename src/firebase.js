import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCisuU2j8GZ7RaVGhAQ8R96QZRWZJdNZuc",
    authDomain: "auth-719a0.firebaseapp.com",
    projectId: "auth-719a0",
    storageBucket: "auth-719a0.appspot.com",
    messagingSenderId: "74245386030",
    appId: "1:74245386030:web:397f326937ac96d86ed4bf"
});


export default firebaseApp;
export const fire = getAuth()
