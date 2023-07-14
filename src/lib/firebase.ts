// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABoD4CvcVt-eQuLimTqGJlQB_DBBIkaeA",
  authDomain: "book-max.firebaseapp.com",
  projectId: "book-max",
  storageBucket: "book-max.appspot.com",
  messagingSenderId: "657416777380",
  appId: "1:657416777380:web:4178a123629ac7ebc68031",
  measurementId: "G-ZPGJ9H3R87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
