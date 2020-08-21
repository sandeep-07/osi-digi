import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDG3LV5t1C0EZwyC85Qhrl7TjhPSDXp5u4",
  authDomain: "shop-ebuy.firebaseapp.com",
  databaseURL: "https://shop-ebuy.firebaseio.com",
  projectId: "shop-ebuy",
  storageBucket: "shop-ebuy.appspot.com",
  messagingSenderId: "20223141564",
  appId: "1:20223141564:web:add83b931b4686d59592b9",
  measurementId: "G-034ENJ8PXX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }