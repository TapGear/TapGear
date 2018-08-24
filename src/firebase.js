import {initializeApp} from 'firebase'

const firebaseApp = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
})

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyBN3-xrwr8LtlQyagFK_V7lmsHupjGV4pA',
//   authDomain: 'test-project-3dc68.firebaseapp.com',
//   databaseURL: 'https://test-project-3dc68.firebaseio.com',
//   projectId: 'test-project-3dc68',
//   storageBucket: 'test-project-3dc68.appspot.com',
//   messagingSenderId: '9736352361'
// })

// Get a reference to the database service

export const db = firebaseApp.database()
