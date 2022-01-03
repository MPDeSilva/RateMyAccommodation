// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/compat/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIxhYJHsUoMxTPZ-Rm-WgsMBCfSE-ZCok",
  authDomain: "rate-my-accommodation.firebaseapp.com",
  projectId: "rate-my-accommodation",
  storageBucket: "rate-my-accommodation.appspot.com",
  messagingSenderId: "551364748132",
  appId: "1:551364748132:web:33a93b0b0aecdd8c361071",
  measurementId: "G-6XM36N35K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }