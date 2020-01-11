import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAfWdUYsWVKxMDS5uhIt_-jalptC9BmAHI",
  authDomain: "crwn-db-65e64.firebaseapp.com",
  databaseURL: "https://crwn-db-65e64.firebaseio.com",
  projectId: "crwn-db-65e64",
  storageBucket: "crwn-db-65e64.appspot.com",
  messagingSenderId: "304953052664",
  appId: "1:304953052664:web:5724d0441744ad51d25a0d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
