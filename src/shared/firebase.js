import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoXR0M-ey23maKIIJ_zcj43F1x3jp3OTE",
  authDomain: "magazine-f857a.firebaseapp.com",
  projectId: "magazine-f857a",
  storageBucket: "magazine-f857a.appspot.com",
  messagingSenderId: "529712813884",
  appId: "1:529712813884:web:65c5a515ab2eb49aa5f039",
  measurementId: "G-KLT2KR403R",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
