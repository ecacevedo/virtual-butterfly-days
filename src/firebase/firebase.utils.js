import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyAVw-FwPqcAAZeVZhlkoSD5Iajo_VEP0m8",
  authDomain: "virtual-butterfly-days.firebaseapp.com",
  databaseURL: "https://virtual-butterfly-days.firebaseio.com",
  projectId: "virtual-butterfly-days",
  storageBucket: "virtual-butterfly-days.appspot.com",
  messagingSenderId: "879984351018",
  appId: "1:879984351018:web:8dac131be33d634684b053",
  measurementId: "G-PBLTGSDXPJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;