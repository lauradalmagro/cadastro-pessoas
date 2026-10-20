import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCZH8K_DYHdLhkjianez-rnaIGgCZCjsrg",
  databaseURL: "https://rotina-e3633-default-rtdb.firebaseio.com/",
  authDomain: "rotina-e3633.firebaseapp.com",
  projectId: "rotina-e3633",
  storageBucket: "rotina-e3633.firebasestorage.app",
  messagingSenderId: "976056749300",
  appId: "1:976056749300:web:15b26527a73e58b033e2a1",
  measurementId: "G-KNMKK8EB66"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);