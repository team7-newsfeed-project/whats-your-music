import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKloqfbOGXTKG27-W2kXUUYKoOkm96E6M",
    authDomain: "news-feed-project-77b30.firebaseapp.com",
    projectId: "news-feed-project-77b30",
    storageBucket: "news-feed-project-77b30.appspot.com",
    messagingSenderId: "817630991945",
    appId: "1:817630991945:web:e268ca749628701a7d9198",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
