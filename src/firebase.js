import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAK68pIjQoUX05IvFxLV5IDDzChK8t1Vns',
  authDomain: 'react-bangkok-3-countdown.firebaseapp.com',
  databaseURL: 'https://react-bangkok-3-countdown.firebaseio.com',
  projectId: 'react-bangkok-3-countdown',
  storageBucket: 'react-bangkok-3-countdown.appspot.com',
  messagingSenderId: '409894190660'
}

firebase.initializeApp(config)
export const database = firebase.database()
export { firebase }
