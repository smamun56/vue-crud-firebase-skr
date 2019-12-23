import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyAbVKMJH11_zxs3bxvxjq8NuUoBfcg4mBQ",
  authDomain: "vue-skr.firebaseapp.com",
  databaseURL: "https://vue-skr.firebaseio.com",
  projectId: "vue-skr",
  storageBucket: "vue-skr.appspot.com",
  messagingSenderId: "299208054550",
  appId: "1:299208054550:web:02af88a83f82512f3aa237"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
