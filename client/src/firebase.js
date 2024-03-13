// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fb039.firebaseapp.com",
  projectId: "mern-estate-fb039",
  storageBucket: "mern-estate-fb039.appspot.com",
  messagingSenderId: "925347399680",
  appId: "1:925347399680:web:aae1b14642dc0e383070e5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);