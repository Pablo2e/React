import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyAu3uQoqLKCm3RGKNwMrp99UysdZACt6Lc",
    authDomain: "roles-udemy-385db.firebaseapp.com",
    databaseURL: "https://roles-udemy-385db.firebaseio.com",
    projectId: "roles-udemy-385db",
    storageBucket: "roles-udemy-385db.appspot.com",
    messagingSenderId: "824630067125",
    appId: "1:824630067125:web:e1131e6a121f4820dd23fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore()
 const auth = firebase.auth()
 const functions = firebase.functions()

 export {db, auth, firebase, functions}