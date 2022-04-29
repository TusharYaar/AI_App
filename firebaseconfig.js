import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATzr6CPVzngyn2CwvsS9oNVI8HSbzyKbQ",
  authDomain: "ai-project-b3f7f.firebaseapp.com",
  projectId: "ai-project-b3f7f",
  storageBucket: "ai-project-b3f7f.appspot.com",
  messagingSenderId: "387238854027",
  appId: "1:387238854027:web:4215a11f901a4e0d50c38e",
  measurementId: "G-9D7JJLZMRT",
};

initializeApp(firebaseConfig);
