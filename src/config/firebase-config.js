import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2iUcy_Ca03rDT3fD3G9l5Xn9XKRQyXxY",
  authDomain: "ecole-sainte-marguerite.firebaseapp.com",
  projectId: "ecole-sainte-marguerite",
  storageBucket: "ecole-sainte-marguerite.appspot.com",
  messagingSenderId: "39256083015",
  appId: "1:39256083015:web:85f76d6794132cc9eb7f62",
  measurementId: "G-Z46MDR5NHM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);