import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXLoaPo75YIYugRXUHdbijwjda72iGPag",
  authDomain: "crwn-db-d969c.firebaseapp.com",
  databaseURL: "https://crwn-db-d969c.firebaseio.com",
  projectId: "crwn-db-d969c",
  storageBucket: "",
  messagingSenderId: "696849729530",
  appId: "1:696849729530:web:6a13e1ec49825680"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;