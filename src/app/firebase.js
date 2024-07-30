// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChMcfbTYeRpMzC4yosHdVEJCujxFXbstE",
  authDomain: "inventory-management-app-80391.firebaseapp.com",
  projectId: "inventory-management-app-80391",
  storageBucket: "inventory-management-app-80391.appspot.com",
  messagingSenderId: "213511916529",
  appId: "1:213511916529:web:54eaa99b42c31403f09250",
  measurementId: "G-05YCXWB9X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase configuration to use in other parts of your app
export { app, analytics };