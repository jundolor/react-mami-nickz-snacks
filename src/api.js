import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBpPxcUXBLBCyQlsqKQmdI2t_GsOYBlAOo",
  authDomain: "maminickz.firebaseapp.com",
  projectId: "maminickz",
  storageBucket: "maminickz.appspot.com", // ✅ fixed
  messagingSenderId: "300083081457",
  appId: "1:300083081457:web:62d26e0e950bcdc6407950"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const snackCollectionRef = collection(db, "snacks")
const usersCollectionRef = collection(db, "users")

export async function getSnacks() {
    const snapshot = await getDocs(snackCollectionRef)
    const snacks = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return snacks
}

export async function getSnack(id) {
    const docRef = doc(db, "snacks", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostSnacks() {
    const q = query(snackCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const snacks = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return snacks
}

/*
export async function loginUser(creds) {
    //creds is an object with key values for email and password
    const q = query(usersCollectionRef,  where("email", "==", creds.email), where("password", "==", creds.password))
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        throw (
            JSON.stringify({
                message: "No user found",
                statusText: "error validating user",
                status: 401
            })
        )
    }

    const data = querySnapshot.docs[0].data();

    return data
}
*/