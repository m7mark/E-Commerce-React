import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuGzxS5Pobv47pf-9i_d-xsGpQKQHfRmA",
  authDomain: "e-commerce-m7mark.firebaseapp.com",
  projectId: "e-commerce-m7mark",
  storageBucket: "e-commerce-m7mark.appspot.com",
  messagingSenderId: "661630741529",
  appId: "1:661630741529:web:6d95ef9666393cc7cd8e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app