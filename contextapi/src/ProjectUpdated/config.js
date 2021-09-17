import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNcMj8jnRYa4s1amWeuU7bMGsC8PotR4U",
  authDomain: "book-app-c3ab3.firebaseapp.com",
  projectId: "book-app-c3ab3",
  storageBucket: "book-app-c3ab3.appspot.com",
  messagingSenderId: "137272808070",
  appId: "1:137272808070:web:e430857a4e962e48bef707",
  measurementId: "G-HWHHHZ7YSY"
});
const db = firebaseApp.firestore();
export default db;
