
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCap6SAlKvE8K8MPtoFv-jFKO7YlYff4us",
  authDomain: "lifespark-website-demo.firebaseapp.com",
  projectId: "lifespark-website-demo",
  storageBucket: "lifespark-website-demo.appspot.com",
  messagingSenderId: "750227635007",
  appId: "1:750227635007:web:4120aede83c3064f52b18a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };