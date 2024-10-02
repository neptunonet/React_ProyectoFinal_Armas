//Conexion Firestore con Variables de Entorno para VITE

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// //Conexion Firestore con Variables de Entorno expuestas

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBoxxOgo3PF2NfffKtbqTFq-7Y5P2ttZEY",
//   authDomain: "coder-react-2024.firebaseapp.com",
//   projectId: "coder-react-2024",
//   storageBucket: "coder-react-2024.appspot.com",
//   messagingSenderId: "1040853629646",
//   appId: "1:1040853629646:web:6ddd44617759f549f92e9f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);