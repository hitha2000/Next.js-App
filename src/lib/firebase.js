// Importing the functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRQLJmeQxPllYyOEQWgE2P-VDK9WKMads",
  authDomain: "babylon-radio-app-9fb09.firebaseapp.com",
  projectId: "babylon-radio-app-9fb09",
  storageBucket: "babylon-radio-app-9fb09.firebasestorage.app",
  messagingSenderId: "747237653601",
  appId: "1:747237653601:web:da9bd8f40479b1526d7e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);