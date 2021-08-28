import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBetmoOkgcFJH_C2fsj0i6KAlcorX1gRz0",
  authDomain: "netflix-clone-445ca.firebaseapp.com",
  projectId: "netflix-clone-445ca",
  storageBucket: "netflix-clone-445ca.appspot.com",
  messagingSenderId: "387646898581",
  appId: "1:387646898581:web:88af758d451bc96978769c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
