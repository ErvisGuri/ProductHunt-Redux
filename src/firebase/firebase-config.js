import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyKVvJSOYbDdCzPuB8crGBID2MkPtNM08",
  authDomain: "e-commerce-react-redux-cb8c0.firebaseapp.com",
  projectId: "e-commerce-react-redux-cb8c0",
  storageBucket: "e-commerce-react-redux-cb8c0.appspot.com",
  messagingSenderId: "61368497650",
  appId: "1:61368497650:web:a4cb67329640da106e276b",
  measurementId: "G-LP7N4TPXH3",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const singInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL


    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
  }).catch(err => {
    console.log(err)
  })
}


