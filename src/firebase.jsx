import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpPxcUXBLBCyQlsqKQmdI2t_GsOYBlAOo",
  authDomain: "maminickz.firebaseapp.com",
  projectId: "maminickz",
  storageBucket: "maminickz.appspot.com", // ✅ fixed
  messagingSenderId: "300083081457",
  appId: "1:300083081457:web:62d26e0e950bcdc6407950"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);