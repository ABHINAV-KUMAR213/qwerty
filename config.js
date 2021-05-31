import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCJGFoe_JVDZi4pBfheZI-JDcMNG8IJWPI",
  authDomain: "book-santa-a72d2.firebaseapp.com",
  projectId: "book-santa-a72d2",
  storageBucket: "book-santa-a72d2.appspot.com",
  messagingSenderId: "595383564527",
  appId: "1:595383564527:web:0362bc7e519f6a8611431a"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
