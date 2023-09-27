import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCLw3FRSnORgqLlt2Quw0k33PO9ylop9Rw",
    authDomain: "twitter-clone-55024.firebaseapp.com",
    projectId: "twitter-clone-55024",
    storageBucket: "twitter-clone-55024.appspot.com",
    messagingSenderId: "401476492236",
    appId: "1:401476492236:web:0584a69979f6181de75b69",
    measurementId: "G-BH66VNR3Q8"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default db;