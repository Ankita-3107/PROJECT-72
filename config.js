import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCuSqc102DFgbWrOb19OOjTDEJYYQeZCcE",
    authDomain: "story-hub-82b52.firebaseapp.com",
    databaseURL: "https://story-hub-82b52.firebaseio.com",
    projectId: "story-hub-82b52",
    storageBucket: "story-hub-82b52.appspot.com",
    messagingSenderId: "90119198232",
    appId: "1:90119198232:web:e1aecb88edb36e968a956d"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();