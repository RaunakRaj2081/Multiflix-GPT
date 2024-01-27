// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhLatvDlKs535d8GriqOyLdHaRS0-nju8",
  authDomain: "multiflixgpt.firebaseapp.com",
  projectId: "multiflixgpt",
  storageBucket: "multiflixgpt.appspot.com",
  messagingSenderId: "790613075460",
  appId: "1:790613075460:web:39b7794eb34a2f8595f751",
  measurementId: "G-ENLSXGX3XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();