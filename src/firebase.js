import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDFVZ2saCTDTw1JYChx0gBgSBORk2cDNlU",
  authDomain: "instagram-clone-45.firebaseapp.com",
  projectId: "instagram-clone-45",
  storageBucket: "instagram-clone-45.firebasestorage.app",
  messagingSenderId: "735684928442",
  appId: "1:735684928442:web:de140f7562e5a6b63c7383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Ensure auth uses the correct app instance
