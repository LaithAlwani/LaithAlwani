// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD30R7Xzu73sZHxplzAcmO2x2rnGh95UHY",
  authDomain: "portfolio-laith.firebaseapp.com",
  projectId: "portfolio-laith",
  storageBucket: "portfolio-laith.appspot.com",
  messagingSenderId: "135587125544",
  appId: "1:135587125544:web:94bc2f250a10cf127ad81d",
  measurementId: "G-WXDBV5XP8Y",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
