// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOtp1sCPYeBntIZsi1uiPM11WeIUZff2w",
  authDomain: "ecommersproject-e7baf.firebaseapp.com",
  projectId: "ecommersproject-e7baf",
  storageBucket: "ecommersproject-e7baf.appspot.com",
  messagingSenderId: "509678043114",
  appId: "1:509678043114:web:36dff23dbda60755c03c93",
  measurementId: "G-RBW1VD455T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);