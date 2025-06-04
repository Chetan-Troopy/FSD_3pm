import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuTzKISOzICnc5fXdR7R2PWPuaqsQNLlA",
  authDomain: "webmania-2a038.firebaseapp.com",
  projectId: "webmania-2a038",
  storageBucket: "webmania-2a038.firebasestorage.app",
  messagingSenderId: "68691570221",
  appId: "1:68691570221:web:1254ddcf1bddf3c70592a4",
  measurementId: "G-JQ9ZSKFZ82"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)