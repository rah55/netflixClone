// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCuyEyUB646pm4nkoJVIzR5E-doI1Fvvp4",
  authDomain: "netflix-8640f.firebaseapp.com",
  projectId: "netflix-8640f",
  storageBucket: "netflix-8640f.firebasestorage.app",
  messagingSenderId: "16411480726",
  appId: "1:16411480726:web:5411b3dce1987296d4e8b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();