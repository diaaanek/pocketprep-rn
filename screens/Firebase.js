import * as firebase from "firebase";
import firestore from "firebase/firestore";
// import firebaseConfig from './config'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDnoGp4oyL0MA7BGmV7ObOfhJUjjKN6ktA",
  authDomain: "devref-3e9c0.firebaseapp.com",
  databaseURL: "https://devref-3e9c0.firebaseio.com",
  projectId: "devref-3e9c0",
  storageBucket: "devref-3e9c0.appspot.com",
  messagingSenderId: "625576900131"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
