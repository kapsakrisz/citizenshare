// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSRBCkdyGJR5eevRpJQpehded5ieYc5nY",
  authDomain: "citizenchatv2.firebaseapp.com",
  projectId: "citizenchatv2",
  storageBucket: "citizenchatv2.appspot.com",
  messagingSenderId: "908410787657",
  appId: "1:908410787657:web:20d13ef3c5b99e689fec98"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export  {app,db,storage};