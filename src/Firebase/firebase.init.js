// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHd2QNxnNztoEO3lkdsY5C18U9qNmsp9g",
    authDomain: "fir-practice-project-b2a15.firebaseapp.com",
    projectId: "fir-practice-project-b2a15",
    storageBucket: "fir-practice-project-b2a15.appspot.com",
    messagingSenderId: "754735343693",
    appId: "1:754735343693:web:f282f96af33a68819d9404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth;