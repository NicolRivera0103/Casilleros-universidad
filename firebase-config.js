import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD22s6E5un2RCPPbi7VouTUqfJDFxC54ak",
  authDomain: "casillerosuniversidad.firebaseapp.com",
  projectId: "casillerosuniversidad",
  storageBucket: "casillerosuniversidad.firebasestorage.app",
  messagingSenderId: "664244381575",
  appId: "1:664244381575:web:41769884301051f08cd522"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
