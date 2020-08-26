import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import * as firebaseui from 'firebaseui';

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
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth;
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export {projectStorage, projectFirestore, timestamp, firebase, auth, ui};