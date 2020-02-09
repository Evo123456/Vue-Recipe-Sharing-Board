 import firebase, { database } from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDUbM_litv_SI_8sE5VPobNzkVQWqwrLiA",
  authDomain: "recipe-app-79a4e.firebaseapp.com",
  databaseURL: "https://recipe-app-79a4e.firebaseio.com",
  projectId: "recipe-app-79a4e",
  storageBucket: "recipe-app-79a4e.appspot.com",
  messagingSenderId: "543603106691",
  appId: "1:543603106691:web:32ae694180af2e69"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({timestampsInSnapshots:true})

// export firestore database 
export default firebaseApp.firestore(database)