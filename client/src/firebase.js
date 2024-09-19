// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zlogs-6b805.firebaseapp.com",
  projectId: "zlogs-6b805",
  storageBucket: "zlogs-6b805.appspot.com",
  messagingSenderId: "431581848250",
  appId: "1:431581848250:web:f92ea09f523d1a2a851883"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);