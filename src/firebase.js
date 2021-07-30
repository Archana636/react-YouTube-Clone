import firebase from 'firebase/app'

import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCVyLnC1lHm95GjgvcIjCeGF8qiFBX1DyQ",
  authDomain: "archana-sen.firebaseapp.com",
  projectId: "archana-sen",
  storageBucket: "archana-sen.appspot.com",
  messagingSenderId: "574223090843",
  appId: "1:574223090843:web:6d55d56119996b5227f23e"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()