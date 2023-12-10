// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA02QvT94UYyKAANVEVMVDU4SuXymynbRg",
  authDomain: "book-matching-app-6dff5.firebaseapp.com",
  projectId: "book-matching-app-6dff5",
  storageBucket: "book-matching-app-6dff5.appspot.com",
  messagingSenderId: "692563670678",
  appId: "1:692563670678:web:b49efd8163f4228cb734b7",
  measurementId: "G-EGZC56JJZX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
