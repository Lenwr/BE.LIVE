import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyClhqXKUe6jF7AgNngdvgzUh99If8ctnZo",
    authDomain: "belive-bef62.firebaseapp.com",
    projectId: "belive-bef62",
    storageBucket: "belive-bef62.appspot.com",
    messagingSenderId: "88804380383",
    appId: "1:88804380383:web:6e9b737262e2b08660236a",
    measurementId: "G-Q7PP37CZ0S"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const eventsRef = collection(db, 'events')