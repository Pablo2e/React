import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  /* apiKey: "AIzaSyCm_so7mqg3saSSF2OL6X4ZcKcv_b_GfUc",
  authDomain: "crud-udemy-react-adda1.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-adda1.firebaseio.com",
  projectId: "crud-udemy-react-adda1",
  storageBucket: "crud-udemy-react-adda1.appspot.com",
  messagingSenderId: "1035688492031",
  appId: "1:1035688492031:web:56dae5c9cecd9cc5b905ca" */
  apiKey: "AIzaSyDbMz33pzpKhfJkiGGIJtJb18gmUMJD22M",
    authDomain: "crud-udemy-react-898b3.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-898b3.firebaseio.com",
    projectId: "crud-udemy-react-898b3",
    storageBucket: "crud-udemy-react-898b3.appspot.com",
    messagingSenderId: "569028536679",
    appId: "1:569028536679:web:6369d268847ccc53fea7c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};