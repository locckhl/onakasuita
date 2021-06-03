import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCr97qTemHM00qYmZ7Qg9-I6eQWSrzJtho",
  authDomain: "onakasuita-8c3ac.firebaseapp.com",
  projectId: "onakasuita-8c3ac",
  storageBucket: "onakasuita-8c3ac.appspot.com",
  messagingSenderId: "2504586641",
  appId: "1:2504586641:web:04748b6dd381a125a2d630",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db
