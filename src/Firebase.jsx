// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa6UkGOSr5qAI_Dijv1AbROXaHkIxMh4U",
  authDomain: "blogsitereact.firebaseapp.com",
  projectId: "blogsitereact",
  storageBucket: "blogsitereact.appspot.com",
  messagingSenderId: "723424420912",
  appId: "1:723424420912:web:8e9113ef919489054bf9f5",
  measurementId: "G-DPT4RN94DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app)