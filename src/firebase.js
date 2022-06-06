import { initializeApp } from "firebase/app"
import {getAuth, signInWithEmailAndPassword, sendPasswordResetEmail
, signOut, createUserWithEmailAndPassword} from "firebase/auth"
// eslint-disable-next-line
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore"

import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCgtNC4lsGdkbf7GpUa-qDooqwllSX-TYo",
    authDomain: "first-supper-e5269.firebaseapp.com",
    projectId: "first-supper-e5269",
    storageBucket: "first-supper-e5269.appspot.com",
    messagingSenderId: "614071991713",
    appId: "1:614071991713:web:a605f385e660ddf51c1fe0",
    measurementId: "G-QQDZMRS1P6"
};


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const logInWithEmailAndPassword = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const registerWithEmailAndPassword = async (description, gender,date,name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                displayName: name,
                authProvider: "local",
                email: email,
                date: date,
                gender: gender,
                description: description,
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const sendPasswordReset = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset link sent!");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const logout = () => {
        signOut(auth);
    };
    export {
        auth,
        db,
        signInWithEmailAndPassword,
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        sendPasswordReset,
        logout,
    };

