

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDosE-sh5E92Wmgo3_eTEe-m0QJJgOohKA",
  authDomain: "react-pratik-portfolio.firebaseapp.com",
  projectId: "react-pratik-portfolio",
  storageBucket: "react-pratik-portfolio.appspot.com",
  messagingSenderId: "383651894359",
  appId: "1:383651894359:web:245c22a37bf5131ea9ff12",
  measurementId: "G-ZW5TYHW0QK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
// const analytics = getAnalytics(app);