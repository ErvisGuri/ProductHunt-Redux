import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyKVvJSOYbDdCzPuB8crGBID2MkPtNM08",
  authDomain: "e-commerce-react-redux-cb8c0.firebaseapp.com",
  projectId: "e-commerce-react-redux-cb8c0",
  storageBucket: "e-commerce-react-redux-cb8c0.appspot.com",
  messagingSenderId: "61368497650",
  appId: "1:61368497650:web:a4cb67329640da106e276b",
  measurementId: "G-LP7N4TPXH3",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
