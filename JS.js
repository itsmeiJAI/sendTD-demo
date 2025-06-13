// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYAA--dU7azrYQaFJfsmMvfxLI-NNtoxU",
  authDomain: "sendtd-demo.firebaseapp.com",
  projectId: "sendtd-demo",
  storageBucket: "sendtd-demo.firebasestorage.app",
  messagingSenderId: "201616527485",
  appId: "1:201616527485:web:81efdec075072761eaa114",
  measurementId: "G-D3RF03J1N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);