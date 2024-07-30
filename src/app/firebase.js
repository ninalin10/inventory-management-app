import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Import analytics functions only in the browser
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
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
const firestore = getFirestore(app);

// Initialize Firebase Analytics only if it's supported (browser environment)
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export the Firebase configuration to use in other parts of your app
export { app, firestore, analytics };