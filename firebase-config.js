// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD22s6E5un2RCPPbi7VouTUqfJDFxC54ak",
  authDomain: "casillerosuniversidad.firebaseapp.com",
  projectId: "casillerosuniversidad",
  storageBucket: "casillerosuniversidad.firebasestorage.app",
  messagingSenderId: "664244381575",
  appId: "1:664244381575:web:41769884301051f08cd522",
  measurementId: "G-ECWELGZ86T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
