  //1. provide your creditial
  const firebaseConfig = {
    
    apiKey: "AIzaSyCjywyFra4rgyGPd8Itcc2lbKsr3YO1A4s",
  authDomain: "adminmanagment-4ccc9.firebaseapp.com",
  databaseURL: "https://adminmanagment-4ccc9-default-rtdb.firebaseio.com",
  projectId: "adminmanagment-4ccc9",
  storageBucket: "adminmanagment-4ccc9.appspot.com",
  messagingSenderId: "240876375627",
  appId: "1:240876375627:web:c88672fc4ff7ce64a307ce",
  measurementId: "G-C48Z1833VY" 

  };
  //2. connect
  firebase.initializeApp(firebaseConfig);
  var authenticationObject=firebase.auth();