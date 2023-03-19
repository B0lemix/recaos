// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const values = {
   key: import.meta.env.VITE_KEY,
   domain: import.meta.env.VITE_DOMAIN,
   id: import.meta.env.VITE_ID,
   bucket: import.meta.env.VITE_Bucket,
   sender: import.meta.env.VITE_SenderId,
   appID: import.meta.env.VITE_APP,
};
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: values.key,
   authDomain: values.domain,
   projectId: values.id,
   storageBucket: values.bucket,
   messagingSenderId: values.sender,
   appId: values.appID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
