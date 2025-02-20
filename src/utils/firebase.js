// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvO2UKhcAYWQT43MFMEnOZkbYvmUcm5Zs",
  authDomain: "netflixgpt-a1ea0.firebaseapp.com",
  projectId: "netflixgpt-a1ea0",
  storageBucket: "netflixgpt-a1ea0.firebasestorage.app",
  messagingSenderId: "1089768720992",
  appId: "1:1089768720992:web:d0c5469d37fd2df0661105",
  measurementId: "G-FG30MJGWJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();