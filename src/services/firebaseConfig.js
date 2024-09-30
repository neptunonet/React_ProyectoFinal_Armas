// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoxxOgo3PF2NfffKtbqTFq-7Y5P2ttZEY",
  authDomain: "coder-react-2024.firebaseapp.com",
  projectId: "coder-react-2024",
  storageBucket: "coder-react-2024.appspot.com",
  messagingSenderId: "1040853629646",
  appId: "1:1040853629646:web:6ddd44617759f549f92e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
