import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const  firebaseConfig = {
    apiKey: "AIzaSyBAZEuS3V6jWkI_NktFa_KKW7AAsmDhnJs",
    authDomain: "login-udemy-3dec9.firebaseapp.com",
    databaseURL: "https://login-udemy-3dec9.firebaseio.com",
    projectId: "login-udemy-3dec9",
    storageBucket: "login-udemy-3dec9.appspot.com",
    messagingSenderId: "41672739484",
    appId: "1:41672739484:web:b03ad373f638a91b9ebb59"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export {db, auth}