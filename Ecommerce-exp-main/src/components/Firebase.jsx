// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1q8iabNhFebPoGda3o9Bd3pnzWvtOypE",
  authDomain: "nextwavetest-5b781.firebaseapp.com",
  projectId: "nextwavetest-5b781",
  storageBucket: "nextwavetest-5b781.firebasestorage.app",
  messagingSenderId: "772141157457",
  appId: "1:772141157457:web:f2d69e5a1e16c3b32a7c70",
  measurementId: "G-515VFPJN07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
