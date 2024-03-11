// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Sd1mFrH748vz7CnJSh8Tg3wqUug-t_c",
  authDomain: "turo-45029.firebaseapp.com",
  databaseURL: "https://turo-45029-default-rtdb.firebaseio.com",
  projectId: "turo-45029",
  storageBucket: "turo-45029.appspot.com",
  messagingSenderId: "277973351030",
  appId: "1:277973351030:web:21debc59e2580b9dc1fd57",
  measurementId: "G-CRPS22LCLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);