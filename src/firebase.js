// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiD5-XKrbthL6bw9vXtooWRUsxznkyA5Q",
  authDomain: "guestbook-92a65.firebaseapp.com",
  projectId: "guestbook-92a65",
  storageBucket: "guestbook-92a65.appspot.com",
  messagingSenderId: "153071363307",
  appId: "1:153071363307:web:c816bed382bb03b6cf0aae",
  measurementId: "G-TNEPDBGRQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

//  For Register
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(res);
    const user = res.user;
    // console.log(user);
    return user;
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

// For Login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw err;
  }
};

// For Reset Password
const sendPasswordReset = async (auth, email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// For Google
const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    const user = response.user;
    return user;
  } catch (err) {
    throw err;
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
};
