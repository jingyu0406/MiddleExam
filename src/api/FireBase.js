// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ92OVlo7s_7nT4SmTiBUV2smvAQEea5A",
    authDomain: "appfinal-e0f14.firebaseapp.com",
    projectId: "appfinal-e0f14",
    storageBucket: "appfinal-e0f14.appspot.com",
    messagingSenderId: "437667576644",
    appId: "1:437667576644:web:0212beb37f422fc349f511"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);