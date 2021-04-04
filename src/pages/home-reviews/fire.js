import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAXBLNIAKwVpe-Bi0ZE2TQh_tBwfTgEi90",
    authDomain: "gurukul-2021.firebaseapp.com",
    databaseURL: "https://gurukul-2021-default-rtdb.firebaseio.com",
    projectId: "gurukul-2021",
    storageBucket: "gurukul-2021.appspot.com",
    messagingSenderId: "389476625095",
    appId: "1:389476625095:web:00c8bec0dcf312cdb02ce2"
  };

var fire=firebase.initializeApp(firebaseConfig);
// const db = firebase.database().ref();
export default fire;