import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWvfCu-YMoeu4NtExG3MUv64zSTlHLGOc",
  authDomain: "event-controller-7c7f1.firebaseapp.com",
  projectId: "event-controller-7c7f1",
  storageBucket: "event-controller-7c7f1.firebasestorage.app",
  messagingSenderId: "888602555719",
  appId: "1:888602555719:web:080acf494c16066c548862",
  measurementId: "G-FFWHXHDV0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, createUserWithEmailAndPassword };
