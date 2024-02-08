import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    // apiKey: "AIzaSyAKloqfbOGXTKG27-W2kXUUYKoOkm96E6M",
    // authDomain: "news-feed-project-77b30.firebaseapp.com",
    // projectId: "news-feed-project-77b30",
    // storageBucket: "news-feed-project-77b30.appspot.com",
    // messagingSenderId: "817630991945",
    // appId: "1:817630991945:web:e268ca749628701a7d9198",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
