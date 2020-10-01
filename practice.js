
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBP6EwMBuyVB11vv2DggQbH0NcPq1SeSXE",
    authDomain: "sociochat-14149.firebaseapp.com",
    databaseURL: "https://sociochat-14149.firebaseio.com",
    projectId: "sociochat-14149",
    storageBucket: "sociochat-14149.appspot.com",
    messagingSenderId: "739481718723",
    appId: "1:739481718723:web:620ea8faa330a441b7b776",
    measurementId: "G-C319LGZ51V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function AddUser()
  {
      User_Name = document.getElementById("User_Name").value;
      firebase.database().ref("/").child(User_Name).update({purpose : "Adding User"});
      
  }