import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgtNC4lsGdkbf7GpUa-qDooqwllSX-TYo",
    authDomain: "first-supper-e5269.firebaseapp.com",
    projectId: "first-supper-e5269",
    storageBucket: "first-supper-e5269.appspot.com",
    messagingSenderId: "614071991713",
    appId: "1:614071991713:web:a605f385e660ddf51c1fe0",
    measurementId: "G-QQDZMRS1P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const auth = getAuth(app)
// const db = getFirestore(app)
// export {db}