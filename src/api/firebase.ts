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

export const createUserEmailPassword = (user: User) => {
    return createUserWithEmailAndPassword(auth, user.username, user.password)
}

export const loginUserEmailPassword = (user: User) => {
  return signInWithEmailAndPassword(auth, user.username, user.password)
}

export const logoutUser = () => {
  return signOut(auth)
}