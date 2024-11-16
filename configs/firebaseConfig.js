
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "car-management-applicati-1d9dd.firebaseapp.com",
    projectId: "car-management-applicati-1d9dd",
    storageBucket: "car-management-applicati-1d9dd.firebasestorage.app",
    messagingSenderId: "55885234671",
    appId: "1:55885234671:web:992386bd66dc3ceb51761a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);