import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3PVGgyQAxrxxxXkzGieb7oYwCZa3LmbE",
    authDomain: "rmdregi-85d6b.firebaseapp.com",
    projectId: "rmdregi-85d6b",
    storageBucket: "rmdregi-85d6b.firebasestorage.app",
    messagingSenderId: "1023698159955",
    appId: "1:1023698159955:web:d3463e27d8189898c239a6",
    measurementId: "G-M2QG981BGG"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
