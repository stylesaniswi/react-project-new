
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwSpFYM5e875eE5buOrgP9AQTxNTKzRyQ",
  authDomain: "firechat-d8706.firebaseapp.com",
  projectId: "firechat-d8706",
  storageBucket: "firechat-d8706.appspot.com",
  messagingSenderId: "457661030730",
  appId: "1:457661030730:web:e2293f7acefcc241f921b3",
  measurementId: "G-N57YWN10RX",
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}