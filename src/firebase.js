import {initializeApp} from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBEm7c6vcKGMz55CwWMcC44q60IVkzqcwU',
  authDomain: 'tapgear-ea17e.firebaseapp.com',
  databaseURL: 'https://tapgear-ea17e.firebaseio.com',
  projectId: 'tapgear-ea17e',
  storageBucket: 'tapgear-ea17e.appspot.com',
  messagingSenderId: '842846043379'
})

// Get a reference to the database service

export const db = firebaseApp.database()
