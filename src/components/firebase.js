import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEK7DNDwOjq491GBV3uK-hiHzv3lkHh34",
  authDomain: "hackathon-f7f79.firebaseapp.com",
  projectId: "hackathon-f7f79",
  storageBucket: "hackathon-f7f79.appspot.com",
  messagingSenderId: "1029671814558",
  appId: "1:1029671814558:web:7a526272a3f4386e19028f",
  measurementId: "G-PG3S1H39N5"
};

// Inicializa Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export default db;