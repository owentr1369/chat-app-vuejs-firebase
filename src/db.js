import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDXPudefGszsncpp-7ool0i4v8EqARIEls",
  authDomain: "vue-firebase-chatapp-e5b18.firebaseapp.com",
  projectId: "vue-firebase-chatapp-e5b18",
  storageBucket: "vue-firebase-chatapp-e5b18.appspot.com",
  messagingSenderId: "244462215144",
  appId: "1:244462215144:web:7f46860747d3908dd4ce5d",
};

const db = firebase.initializeApp(config);

export default db;
