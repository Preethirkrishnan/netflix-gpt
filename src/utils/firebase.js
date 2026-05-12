// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRy-5P7VrquKkaajAGhJnvaXko-m5WDf0",
  authDomain: "netflixgpt-aaef8.firebaseapp.com",
  projectId: "netflixgpt-aaef8",
  storageBucket: "netflixgpt-aaef8.firebasestorage.app",
  messagingSenderId: "454967637447",
  appId: "1:454967637447:web:0e791685eef9af2e36d5e2",
  measurementId: "G-2M10VCS3EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();