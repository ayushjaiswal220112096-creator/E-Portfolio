// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPcuLopgnC25gn83j-Sfkhc7LT-Dxuhs8",
  authDomain: "ayush-portfolio-e2f74.firebaseapp.com",
  projectId: "ayush-portfolio-e2f74",
  storageBucket: "ayush-portfolio-e2f74.firebasestorage.app",
  messagingSenderId: "553715780171",
  appId: "1:553715780171:web:c0a9b46e6bfaa5daee1bce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
