
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

export const initFire = initializeApp({
  apiKey: "AIzaSyDX2y3yFsh7HTTnzHG_BKt2LkOJ1BiuIxk",
  authDomain: "buddies-be2bb.firebaseapp.com",
  projectId: "buddies-be2bb",
  storageBucket: "buddies-be2bb.appspot.com",
  messagingSenderId: "779455827700",
  appId: "1:779455827700:web:c6e2afac1e076d582618a1"
});

 export const auth = getAuth(initFire)

 export const db = getFirestore(initFire);
