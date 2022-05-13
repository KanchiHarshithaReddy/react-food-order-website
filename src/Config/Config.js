import  firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbn-BPyoyfSf4Pf7NNs4UXAXFKBt_DoSo",
    authDomain: "hartatoapplication.firebaseapp.com",
    projectId: "hartatoapplication",
    storageBucket: "hartatoapplication.appspot.com",
    messagingSenderId: "146969313857",
    appId: "1:146969313857:web:77ef1e04638ce2022b3cc0"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }