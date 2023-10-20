// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiSx7Ea1lIICivIBOk5o7oHbI92a-3yss",
  authDomain: "ac-fproject.firebaseapp.com",
  projectId: "ac-fproject",
  storageBucket: "ac-fproject.appspot.com",
  messagingSenderId: "741349847354",
  appId: "1:741349847354:web:b73e43c8f40d7dd47da003",
  databaseURL: "https://ac-fproject-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const database= firebase.database(app);
export const appDatabaseRef = database.ref('products');