// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGJIN1rZzNzaYJh3P8QZBqnlOWoguxxXw",
    authDomain: "portfolio-fcbd4.firebaseapp.com",
    projectId: "portfolio-fcbd4",
    storageBucket: "portfolio-fcbd4.appspot.com",
    messagingSenderId: "858005559699",
    appId: "1:858005559699:web:1877b4f35bb903788c3066",
    measurementId: "G-GGV8GE937P"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
