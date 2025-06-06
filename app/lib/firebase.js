// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // <-- import auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvv86elbNWQqFnzihk8No1LX5TWE7p2NE",
  authDomain: "heal-hearing.firebaseapp.com",
  projectId: "heal-hearing",
  storageBucket: "heal-hearing.appspot.com",  // fixed typo here
  messagingSenderId: "860662221551",
  appId: "1:860662221551:web:790d82a12f9b4ab5fe291a",
  measurementId: "G-KYNC03DPGH"
};

// Initialize Firebase app only once (important for Next.js hot reloads)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optional: initialize Analytics only on client side to avoid SSR issues
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore DB
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { app, analytics, db, auth };  // <-- export auth