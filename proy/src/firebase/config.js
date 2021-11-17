import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcnrDoHAtDirZx-OnkS7CPMfuJc6i3WIU",
  authDomain: "curso-reactjs-6019f.firebaseapp.com",
  projectId: "curso-reactjs-6019f",
  storageBucket: "curso-reactjs-6019f.appspot.com",
  messagingSenderId: "541434355307",
  appId: "1:541434355307:web:5e5d18c0b1d80e947fdb2e"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

