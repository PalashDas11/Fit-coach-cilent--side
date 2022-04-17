// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIKek1bYqYA3zcx2CFo71vpjJx36-yONI",
  authDomain: "fitness-club-authentication.firebaseapp.com",
  projectId: "fitness-club-authentication",
  storageBucket: "fitness-club-authentication.appspot.com",
  messagingSenderId: "406453812791",
  appId: "1:406453812791:web:56a66946268454223009b2",
  measurementId: "G-VRHYWGVGBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;