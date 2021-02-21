// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvxdNpf6sKwOOm7eiBDwewgdd_ljwrwA8",
    authDomain: "clone-c2ee7.firebaseapp.com",
    projectId: "clone-c2ee7",
    storageBucket: "clone-c2ee7.appspot.com",
    messagingSenderId: "895567003422",
    appId: "1:895567003422:web:f5e9e7100688cd1813d30f",
    measurementId: "G-YYHX9EPXK3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
