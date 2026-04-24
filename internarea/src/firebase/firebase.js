// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1VBsT1yUZrKQQHEAV4uZdNqtF2JHRzA",
  authDomain: "internarea-9f569.firebaseapp.com",
  projectId: "internarea-9f569",
  storageBucket: "internarea-9f569.firebasestorage.app",
  messagingSenderId: "453833217011",
  appId: "1:453833217011:web:5f1b6ef4f61ad6d68eb886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };