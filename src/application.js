import { initializeApp } from 'firebase'

let application = null

export default application = initializeApp({
  apiKey: 'AIzaSyBQ67Rm__5rk48zj4Gh4_d49kf8h8Io4vM',
  authDomain: 'light-bulb-fd900.firebaseapp.com',
  databaseURL: 'https://light-bulb-fd900.firebaseio.com',
  storageBucket: 'light-bulb-fd900.appspot.com',
  messagingSenderId: '1033977406813'
})

export const authentication = application.auth()

export const database = application.database()
