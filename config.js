import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAyl3A8OdKadVsxitg6_bV96OA36_bPFIY",
  authDomain: "e-library-f955b.firebaseapp.com",
  databaseURL: "https://e-library-f955b-default-rtdb.firebaseio.com",
  projectId: "e-library-f955b",
  storageBucket: "e-library-f955b.appspot.com",
  messagingSenderId: "953871214901",
  appId: "1:953871214901:web:0e085760bae26ffa3fc47c"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
