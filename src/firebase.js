import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAf59V34Xc-sbIwOEABDN1aBGluTIDsdRc",
    authDomain: "fonzitwitterclone.firebaseapp.com",
    databaseURL: "https://fonzitwitterclone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fonzitwitterclone",
    storageBucket: "fonzitwitterclone.appspot.com",
    messagingSenderId: "328353766824",
    appId: "1:328353766824:web:66c4a4d3b6d69fa5ab519d",
    measurementId: "G-SFPS5R4JJ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;