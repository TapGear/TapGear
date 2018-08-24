import { initializeApp } from 'firebase'

console.log(process.env.VUE_APP_FIREBASE_DB_URL)

const firebaseApp = initializeApp({
<<<<<<< HEAD
<<<<<<< HEAD
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
=======
=======
>>>>>>> f4cd9179d4986f3f87c06af5058e4b85769a49af
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID
<<<<<<< HEAD
>>>>>>> set .env.local
=======
>>>>>>> f4cd9179d4986f3f87c06af5058e4b85769a49af
})

// Get a reference to the database service

export const db = firebaseApp.database()