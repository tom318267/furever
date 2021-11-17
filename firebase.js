import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbLPY4ByrDuLJPv0_lgac7bdM6Lr_hOv8",
  authDomain: "furever-8e0c3.firebaseapp.com",
  projectId: "furever-8e0c3",
  storageBucket: "furever-8e0c3.appspot.com",
  messagingSenderId: "65082862674",
  appId: "1:65082862674:web:dc40631ebb18b6d406038b",
  measurementId: "G-4W08HDMQ9N",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, auth, provider };
