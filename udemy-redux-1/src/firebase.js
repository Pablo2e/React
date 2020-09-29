import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
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

  const auth = firebase.auth()

  export {auth, firebase}