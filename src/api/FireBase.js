// api/FireBase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAu9UxHwo5kYY3wEyPLroI3V-ACRfGMOsw",
    authDomain: "appfinalfinal-dec78.firebaseapp.com",
    projectId: "appfinalfinal-dec78",
    storageBucket: "appfinalfinal-dec78.appspot.com",
    messagingSenderId: "68745005422",
    appId: "1:68745005422:web:3273b88ac464a2b867997f",
    measurementId: "G-QL94JRV0MR"
};

// Initialize Firebase app
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase auth
const auth = getApps().length > 0 ? getAuth(app) : initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

export { app as FIREBASE_APP, auth as FIREBASE_AUTH, db as FIREBASE_DB };
