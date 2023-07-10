import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-JTn3nC8SCwL3o0dEGW42Glj-MOjI7q8",
  authDomain: "linked-clone-kidus.firebaseapp.com",
  projectId: "linked-clone-kidus",
  storageBucket: "linked-clone-kidus.appspot.com",
  messagingSenderId: "5772272146",
  appId: "1:5772272146:web:9fb2440a68ec3c120beecb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, };
export default firebase


