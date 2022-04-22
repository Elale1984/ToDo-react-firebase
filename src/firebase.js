


import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBABdwx0C9kEDnIL7QetlKPeI3JDpDcVjw",
        authDomain: "mytodo-bcfb9.firebaseapp.com",
        projectId: "mytodo-bcfb9",
        storageBucket: "mytodo-bcfb9.appspot.com",
        messagingSenderId: "838782164913",
        appId: "1:838782164913:web:0855db5a2694040d5f2790",
        measurementId: "G-MHDK788VCK"
    

});



const db = firebaseApp.firestore();

export default db;