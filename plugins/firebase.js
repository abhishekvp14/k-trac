// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGXBYwIcdvd1rNsvMC5XZC1xIQjvy9JSU',
  authDomain: 'k-trac.firebaseapp.com',
  databaseURL: 'https://k-trac-default-rtdb.firebaseio.com',
  projectId: 'k-trac',
  storageBucket: 'k-trac.appspot.com',
  messagingSenderId: '784249830896',
  appId: '1:784249830896:web:56a7c269beed83ec78f135'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
