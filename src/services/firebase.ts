import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfJnDz5HOfb0aS-2mLCy8Oxh53yA1kHio",
  authDomain: "todo-list-81774.firebaseapp.com",
  projectId: "todo-list-81774",
  storageBucket: "todo-list-81774.appspot.com",
  messagingSenderId: "667046096151",
  appId: "1:667046096151:web:c5c8ddc3ac45d6930c9b52",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
