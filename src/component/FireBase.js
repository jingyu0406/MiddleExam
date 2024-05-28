// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5Z-Lj7ebt_mcxHnkIpjN348ZU5DRyIPw",
    authDomain: "apptest-28634.firebaseapp.com",
    projectId: "apptest-28634",
    storageBucket: "apptest-28634.appspot.com",
    messagingSenderId: "698573450998",
    appId: "1:698573450998:web:6c4a828ad585414fef06d7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
