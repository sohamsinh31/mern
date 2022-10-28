import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/compat/app';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"; 
import  "firebase/analytics";
import { getMessaging,onMessage } from "firebase/messaging";
import {GoogleAuthProvider,getRedirectResult, signInWithPopup,signInWithRedirect, getAuth,signOut, onAuthStateChanged , createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,deleteUser  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPVYLhPr7WBvLJ3Q0I6uWQrdg9koYl6t4",
  authDomain: "foodapp-6663a.firebaseapp.com",
  projectId: "foodapp-6663a",
  storageBucket: "foodapp-6663a.appspot.com",
  messagingSenderId: "1089880211683",
  appId: "1:1089880211683:web:6c25149935b61162f645d6",
  measurementId: "G-QS12CPD4JL",
};

// Initialize Firebase
const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
//const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
const storage = getStorage();
const rdb =  getDatabase();
const db = getFirestore();
const auth = getAuth();
const messaging = getMessaging(app);
const provider = new GoogleAuthProvider();


export {auth,provider,db,rdb,storage,messaging}