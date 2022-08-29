import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCit7yBhTcc6LRk5Bl2sb4EgHH7bAFs74U",
  authDomain: "netflix-bc549.firebaseapp.com",
  projectId: "netflix-bc549",
  storageBucket: "netflix-bc549.appspot.com",
  messagingSenderId: "568274250788",
  appId: "1:568274250788:web:d5cfec213c98d58f4fbcb1"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.db;
const auth = getAuth(firebaseApp);

export { auth };
export default db;
