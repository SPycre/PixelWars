import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
        apiKey: "AIzaSyDP5_PpCvYbZ7ZDW9kYk0vqHUgjmd01s2s",
        authDomain: "pixelwar-167bf.firebaseapp.com",
        databaseURL: "https://pixelwar-167bf-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "pixelwar-167bf",
        storageBucket: "pixelwar-167bf.appspot.com",
        messagingSenderId: "1031898278295",
        appId: "1:1031898278295:web:6baf0a020430825da73cd2",
        measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);