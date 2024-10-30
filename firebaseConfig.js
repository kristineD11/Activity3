// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8mn6AQNSmoZLwjizd1ow29gtFbF27wxQ",
  authDomain: "fir-integration-c89e4.firebaseapp.com",
  projectId: "fir-integration-c89e4",
  storageBucket: "fir-integration-c89e4.appspot.com",
  messagingSenderId: "1043467810730",
  appId: "1:1043467810730:web:a4ccbecd18adde7ece1dd3",
  measurementId: "G-WNHBLNTZKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
