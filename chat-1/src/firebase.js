import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAL9aUCUcMz7tiym7i31U0jD0WiGLg41uo",
    authDomain: "chat-1-d0915.firebaseapp.com",
    databaseURL: "https://chat-1-d0915.firebaseio.com",
    projectId: "chat-1-d0915",
    storageBucket: "chat-1-d0915.appspot.com",
    messagingSenderId: "1031002160930",
    appId: "1:1031002160930:web:5d15fb771c26ed4943ef7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider =  new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}