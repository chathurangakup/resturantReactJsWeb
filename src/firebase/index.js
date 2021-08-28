import firebase from'firebase/app';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAojt9vLeHcZQ9PAkDcwQ4LWpE3P-yJT08",
    authDomain: "whitelableresturantapp.firebaseapp.com",
    projectId: "whitelableresturantapp",
    storageBucket: "whitelableresturantapp.appspot.com",
    messagingSenderId: "1052507200788",
    appId: "1:1052507200788:web:6ba7a2b48c1cfb89203601",
    measurementId: "G-7RGP32L6MN"
  };

  firebase.initializeApp(firebaseConfig);

  const storage=firebase.storage();

  export {storage,firebase as default}
