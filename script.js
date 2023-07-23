// firebase credentials


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
var firestore = firebase.firestore();




//for first time before any question
const questions = [
    {
      question: 'Garia Puja',
      options: ['Tripura', 'Andhra Pradesh', 'Karnataka', 'Punjab'],
      answer: 'Tripura'
    },
    {
      question: 'Poush Sankranthi',
      options: ['Tripura', 'Karnataka', 'Bihar', 'Odisha'],
      answer: 'Odisha'
    },
    {
      question: 'Ker puja',
      options: ['Tripura', 'Haryana', 'Jharkhand', 'Sikkim'],
      answer: 'Tripura'
    },
    {
      question: 'Kharchi mela',
      options: ['Tripura', 'Karnataka', 'Odisha', 'Madhya Pradesh'],
      answer: 'Tripura'
    },
    {
      question: 'Neermahal water festival',
      options: ['Tripura', 'Manipur', 'Mizoram', 'Haryana'],
      answer: 'Tripura'
    }
  ];
  
  // Reference to the Firestore collection
  const collectionRef = firestore.collection('questions');
  
  // Function to add each question to the collection
  async function addQuestionToFirestore(questionData) {
    try {
      const docRef = await collectionRef.add(questionData);
      console.log(`Added question with ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  
  // Loop through the questions array and add each question to Firestore


  function addData(){
  questions.forEach((question) => {
    addQuestionToFirestore(question);

  });
}
  



  
  // Create the quiz
