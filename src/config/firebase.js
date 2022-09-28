// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrfBxHvaYbt0lfnmQYZgwD0lJahWtLtao",
  authDomain: "jfrc-clupp.firebaseapp.com",
  projectId: "jfrc-clupp",
  storageBucket: "jfrc-clupp.appspot.com",
  messagingSenderId: "574501025042",
  appId: "1:574501025042:web:071b344140cf30b392efcb",
  measurementId: "G-WEE2W11F6M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const database = getFirestore()
export const storage = getStorage(app)