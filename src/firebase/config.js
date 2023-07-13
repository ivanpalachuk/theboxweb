
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtPnpHXjnsIc0qRiUMd-HcQVftCTfOOSk",
    authDomain: "theboxweb.firebaseapp.com",
    projectId: "theboxweb",
    storageBucket: "theboxweb.appspot.com",
    messagingSenderId: "416647226628",
    appId: "1:416647226628:web:09d726caf77e04f030dc51"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
    return app
}

export const auth = getAuth(app)
export const db = getFirestore(app)
