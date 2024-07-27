// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpTSdKCcE118VNYXi6hMLuz_Bl2bRSses",
  authDomain: "myblogapp-1106c.firebaseapp.com",
  projectId: "myblogapp-1106c",
  storageBucket: "myblogapp-1106c.appspot.com",
  messagingSenderId: "225389611033",
  appId: "1:225389611033:web:d3dc2d7e56396b94a20288",
  measurementId: "G-LEM7YTPDV5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const gprovider = new GoogleAuthProvider();
export const storage = firebase.storage();
export default app;
