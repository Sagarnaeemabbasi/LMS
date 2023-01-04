// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs5K2O4pSaKWti1-2eGerVXhhSGXGYAn4",
  authDomain: "students-registration-fo-baa2e.firebaseapp.com",
  databaseURL:
    "https://students-registration-fo-baa2e-default-rtdb.firebaseio.com",
  projectId: "students-registration-fo-baa2e",
  storageBucket: "students-registration-fo-baa2e.appspot.com",
  messagingSenderId: "27955752973",
  appId: "1:27955752973:web:f48d94fe853d2287cf2544",
  measurementId: "G-004HY3YZ44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
