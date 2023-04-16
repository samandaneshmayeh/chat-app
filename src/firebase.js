import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAgyyjr5Zp0GLrb7C3kc5owsoAtUvBBH3s",
    authDomain: "botogram-21fe3.firebaseapp.com",
    projectId: "botogram-21fe3",
    storageBucket: "botogram-21fe3.appspot.com",
    messagingSenderId: "1040234248594",
    appId: "1:1040234248594:web:e62f62b763f5b4e4d1e94b"
  }).auth();