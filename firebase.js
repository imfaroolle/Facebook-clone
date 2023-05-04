// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmnwM5Iv4_bqbfz4BI5AWeBfjwuMEgW98",
  authDomain: "facebook-clone-b5966.firebaseapp.com",
  projectId: "facebook-clone-b5966",
  storageBucket: "facebook-clone-b5966.appspot.com",
  messagingSenderId: "990778473056",
  appId: "1:990778473056:web:83877bb9cb32c0fb30a105",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
