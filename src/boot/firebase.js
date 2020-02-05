import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyBfp-DUDdFFrk2mslOzApJBMSSchTY27DY",
  authDomain: "awesome-todo-f6dd3.firebaseapp.com",
  databaseURL: "https://awesome-todo-f6dd3.firebaseio.com",
  projectId: "awesome-todo-f6dd3",
  storageBucket: "awesome-todo-f6dd3.appspot.com",
  messagingSenderId: "231621048535",
  appId: "1:231621048535:web:7f392b71ff1d3df99f1892",
  measurementId: "G-XBBLRGWWKD"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }