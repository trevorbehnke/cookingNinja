import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYdY0nwmdPsnFPBm8iW8NYcjObVjlBAAk",
  authDomain: "cooking-ninja-5d571.firebaseapp.com",
  projectId: "cooking-ninja-5d571",
  storageBucket: "cooking-ninja-5d571.appspot.com",
  messagingSenderId: "774053421164",
  appId: "1:774053421164:web:2ba7eb6ec6bdec7fb07849",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
