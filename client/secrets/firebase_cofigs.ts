// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useActions } from "../hooks/useAction";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6w_hgrJpjhyIXr4TdhUMLm4kpaTLwqtQ",
  authDomain: "hr-managment-bd7dd.firebaseapp.com",
  projectId: "hr-managment-bd7dd",
  storageBucket: "hr-managment-bd7dd.appspot.com",
  messagingSenderId: "11848927028",
  appId: "1:11848927028:web:a350f44d89dc9d008dc761",
  measurementId: "G-QVEQYQ5Y67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  console.log(res);

  return res;
};

export const signoutGoogle = () => {
  auth.signOut();
};
