// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdA50DDYnr4uEUYRLtWsvra0u_gK_N93s",
  authDomain: "fcfg-3db19.firebaseapp.com",
  projectId: "fcfg-3db19",
  storageBucket: "fcfg-3db19.firebasestorage.app",
  messagingSenderId: "84579743297",
  appId: "1:84579743297:web:917720cbf74abca07838c0",
  measurementId: "G-M2Z90VPJ77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
const analytics = getAnalytics(app);
export default app;
