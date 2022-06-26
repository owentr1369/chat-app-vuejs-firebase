import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDXPudefGszsncpp-7ool0i4v8EqARIEls",
  authDomain: "vue-firebase-chatapp-e5b18.firebaseapp.com",
  databaseURL:
    "https://vue-firebase-chatapp-e5b18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-firebase-chatapp-e5b18",
  storageBucket: "vue-firebase-chatapp-e5b18.appspot.com",
  messagingSenderId: "244462215144",
  appId: "1:244462215144:web:d66cac7e244e28a2d4ce5d",
};

const db = firebase.initializeApp(config);
export default db;
