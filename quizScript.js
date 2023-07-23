const firebaseConfig = {
    apiKey: "AIzaSyA88fPkOvcI4QA9qD3ROpk-ay-V6ibQQlc",
    authDomain: "my-application-7fd40.firebaseapp.com",
    projectId: "my-application-7fd40",
    storageBucket: "my-application-7fd40.appspot.com",
    messagingSenderId: "269589994279",
    appId: "1:269589994279:web:4c617a622c328a1224e702",
    measurementId: "G-D8MD1J28GR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  
  //auth state check - login or not 
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  
      var uid = user.uid;
  
  
      if (user.isAnonymous) {
        signinState = 0;
      } else {
        email = user.email;
      }
  
  
  
      // ...
    } else {
      // User is signed out
      // ...
      signinState = 0;
      //anonymous signin
  
  
  
  
  
      firebase.auth().signInAnonymously()
        .then(function() {
  
  
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  });
  
  //auth check completed
  
  
  
  //firebase components
  const firestore = firebase.firestore();
  
  

