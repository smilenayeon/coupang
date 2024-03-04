// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL1DSUeTHCXXRWH-ZPemZPWO3eTUK19JE",
  authDomain: "react-next-shop-a.firebaseapp.com",
  projectId: "react-next-shop-a",
  storageBucket: "react-next-shop-a.appspot.com",
  messagingSenderId: "488245406982",
  appId: "1:488245406982:web:8d6217e0596e9487e78287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;