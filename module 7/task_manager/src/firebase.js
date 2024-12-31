// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAXuN42tpe0Y20HAUClSsCnSvbti89xbLk",
//     authDomain: "task-manager-92e2d.firebaseapp.com",
//     projectId: "task-manager-92e2d",
//     storageBucket: "task-manager-92e2d.firebasestorage.app",
//     messagingSenderId: "843574543305",
//     appId: "1:843574543305:web:aa2080236dbc9664c9de18",
//     measurementId: "G-YT9L6B03CW"
//   };
// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export default auth;

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXuN42tpe0Y20HAUClSsCnSvbti89xbLk",
  authDomain: "task-manager-92e2d.firebaseapp.com",
  projectId: "task-manager-92e2d",
  storageBucket: "task-manager-92e2d.firebasestorage.app",
  messagingSenderId: "843574543305",
  appId: "1:843574543305:web:aa2080236dbc9664c9de18",
  measurementId: "G-YT9L6B03CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
export default app;
