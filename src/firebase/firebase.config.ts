import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBl91Pp_1j2fwyqh84Eak9-_cW2A7QJa38",
  authDomain: "biblios-d5e81.firebaseapp.com",
  projectId: "biblios-d5e81",
  storageBucket: "biblios-d5e81.appspot.com",
  messagingSenderId: "116805568166",
  appId: "1:116805568166:web:d56b8461ad4a33c24cd667",
  measurementId: "G-ZNE0H36EXF",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
