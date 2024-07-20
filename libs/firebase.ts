// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBon4zEHy-6JNLsFDecamNrYu72QaV93s",
  authDomain: "jgj01-30719.firebaseapp.com",
  projectId: "jgj01-30719",
  storageBucket: "jgj01-30719.appspot.com",
  messagingSenderId: "765095348957",
  appId: "1:765095348957:web:a1ecabfa305b7fda082934",
  measurementId: "G-VDVNSS64T3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;