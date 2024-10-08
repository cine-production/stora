import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1Dm7YuEELvJjZp1NU7mydu9MQRsp6rA",
  authDomain: "appbd-servicetiers.firebaseapp.com",
  projectId: "appbd-servicetiers",
  storageBucket: "appbd-servicetiers.appspot.com",
  messagingSenderId: "387256758942",
  appId: "1:387256758942:web:b88c36b6dc430b4394c18f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, signInWithPopup, GoogleAuthProvider };
