import { initializeApp } from './vendor/firebase/12.18.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from './vendor/firebase/12.18.0/firebase-auth.js';
import { getFirestore, doc, collection, onSnapshot, setDoc, deleteDoc } from './vendor/firebase/12.18.0/firebase-firestore.js';

window.CoralDarFirebase = {
  create: async config => {
    const app = initializeApp(config);
    const auth = getAuth(app);
    await setPersistence(auth, browserLocalPersistence);
    return {
      auth,
      db: getFirestore(app),
      doc,
      collection,
      onSnapshot,
      setDoc,
      deleteDoc,
      GoogleAuthProvider,
      onAuthStateChanged,
      signInWithPopup,
      signOut
    };
  }
};
window.dispatchEvent(new Event('coraldar-firebase-ready'));
