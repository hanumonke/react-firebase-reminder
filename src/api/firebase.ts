// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0LX7s5Aelfpj55WZBK3L8lSMvArDLp8U",
  authDomain: "fir-reminder-8fb9a.firebaseapp.com",
  projectId: "fir-reminder-8fb9a",
  storageBucket: "fir-reminder-8fb9a.appspot.com",
  messagingSenderId: "939271880339",
  appId: "1:939271880339:web:b1fa595a0bc6e40ea39766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


//TODO es posible que necesite hacer una clase para manejar la persistencia de la autenticacion. 
/*
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    / Existing and future Auth states are now persisted in the current
    / session only. Closing the window would clear any existing state even
    / if a user forgets to sign out.
    / ...
    / New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    / Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 - firebase docs -

*/


export const createUserEmailPassword = (user: User) => {
    return createUserWithEmailAndPassword(auth, user.username, user.password)
}

export const loginUserEmailPassword = (user: User) => {
  return signInWithEmailAndPassword(auth, user.username, user.password)
}

export const logoutUser = () => {
  return signOut(auth)
}