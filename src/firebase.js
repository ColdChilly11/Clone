// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJjUbka9C42fPquJaE8cHGNdRhhIAD3sE",
    authDomain: "clone-45e26.firebaseapp.com",
    projectId: "clone-45e26",
    storageBucket: "clone-45e26.appspot.com",
    messagingSenderId: "279983970440",
    appId: "1:279983970440:web:01507e122d0ce10395673d",
    measurementId: "G-GN4X2DPCB9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };