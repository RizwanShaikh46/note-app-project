import firebase from 'firebase/app'


const config = {
    apiKey: "Your api Key",
    authDomain: "Your auth Domain",
    databaseURL: "Your database Url",
    projectId: "Your project Id",
    storageBucket: "Your storage bucket",
    messagingSenderId: "Your messaging id",
    appId: "Your app id"
  };

  firebase.initializeApp(config)
export default firebase