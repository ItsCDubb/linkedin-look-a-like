import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_EQF-ShjhdyUEQcn5KuxX2tBSypEHGd8",
  authDomain: "linkedin-look-a-like.firebaseapp.com",
  projectId: "linkedin-look-a-like",
  storageBucket: "linkedin-look-a-like.appspot.com",
  messagingSenderId: "677705123739",
  appId: "1:677705123739:web:ebb4f503cedc16c4e0c33e",
  measurementId: "G-70LKPGW5TR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
