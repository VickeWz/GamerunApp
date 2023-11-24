// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc, setDoc, getDoc, FieldValue } from "firebase/firestore";
import { collection } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyByWlTlXpwcQGDu6nZ-UW3Ctx3cyO7LFCA",
  authDomain: "barnrun-k.firebaseapp.com",
  projectId: "barnrun-k",
  storageBucket: "barnrun-k.appspot.com",
  messagingSenderId: "332058505282",
  appId: "1:332058505282:web:c3638ae6f5c3e16986fddb"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);

export const addToDistance = async (userId, distance, date) => {
  try {
    const statsDoc = doc(db, "stats", userId);
    const stats = await getDoc(statsDoc)
    try {
      const distanceBefore = stats.data()[`${date}`]["distance"]
      await updateDoc(statsDoc, {
      [`${date}`]: {
          "distance": distanceBefore+distance,
        }
      })
      return distanceBefore+distance
    }
    catch {
      console.log("No distance.");
      await setDoc(statsDoc, {
        [`${date}`]: {
          "distance": distance
        }
      })
      return null
    }
  }
  catch (e) {
    console.error(e)
  }
}

export const getDistance = async (userId, date) => {
  try {
    const statsDoc = doc(db, "stats", userId);
    const stats = await getDoc(statsDoc)
    if (stats.exists()) {
      return stats.data()
    }
  }
  catch (e) {
    console.error(e)
  }
}

export const getUserExtraInfo = async (userId) => {
  try {
    const userExtraDoc = await getDoc(doc(db, "users", userId));
    if (userExtraDoc.exists()) {
      console.log("Read document for User with ID: ", userId)
      return userExtraDoc.data();
    }
  } catch (e) {
    console.error("Error reading document: ", e)
  }
}

export const addUserExtraInfo = async (userId, data) => {
    try {
        const docRef = await setDoc(doc(db, "users", userId), data);
        console.log("Set document for User with ID: ", userId)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const updateUserExtraInfo = async (userId, data) => {
    try {
        const docRef = await updateDoc(doc(db, "users", userId), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}