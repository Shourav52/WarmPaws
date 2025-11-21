// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmuUlImv-AkODEI9jl3SHddZktURAhAkw",
  authDomain: "warmpaws-2e203.firebaseapp.com",
  projectId: "warmpaws-2e203",
  storageBucket: "warmpaws-2e203.firebasestorage.app",
  messagingSenderId: "1033849409996",
  appId: "1:1033849409996:web:fd6a5683ad28de24af4d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 