import * as fireApp from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBSTLRAu4_1ufK3gvKf5WsefhBgcQvcdDY",
  authDomain: "casa-orizzonteblu.firebaseapp.com",
  databaseURL: "https://casa-orizzonteblu.firebaseio.com",
  projectId: "casa-orizzonteblu",
  storageBucket: "casa-orizzonteblu.appspot.com",
  messagingSenderId: "473692215345",
  appId: "1:473692215345:web:4eb582a3e2e6ecf5725d10"
};
// Initialize Firebase
const app = fireApp.initializeApp(firebaseConfig);

const projectStorage = fireApp.storage();
const projectFirestore = fireApp.firestore();
const timestamp = fireApp.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, app };