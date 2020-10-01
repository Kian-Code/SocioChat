//YOUR FIREBASE LINKS
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
    
    UserName = localStorage.getItem("User_Name");
    Room_Name = localStorage.getItem("Room_Name");

    function Send()
    {
          MSG = document.getElementById("msg").value;
          firebase.database().ref(Room_Name).push({
                name:UserName , message: MSG , like:0
          });
          document.getElementById("msg").value = "";

    }

function getData() { firebase.database().ref("/"+Room_Name).on('value', function(snapshot) { document.getElementById("Output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
Name_with_tag = "<h4>" + name + "<img class = 'User_Tick' src = 'tick.png'> </h4>";
Message_with_tag = "<h4 class = 'Message_h4'>" + message + "</h4>";
Like_Button = "<button class = 'btn btn-warning' id = " +firebase_message_id+ " value = " +like+ "  onclick = 'Like(this.id)'> ";
Span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+like+" </span> </button> <hr> ";
Row = Name_with_tag + Message_with_tag + Like_Button + Span_with_tag;
document.getElementById("Output").innerHTML += Row;

//End code
      } });  }); }
getData();

function Like(message_id)
{
console.log("Clicked on like button - " + message_id);
Button_Id = message_id;
Likes = document.getElementById(Button_Id).value;
Updated_Likes = Number(Likes) + 1;
console.log(Updated_Likes);
firebase.database().ref(Room_Name).child(message_id).update({
      like: Updated_Likes
});
}

function LogOut()
{
      localStorage.removeItem("User_Name");
      localStorage.removeItem("Room_Name");
      window.location = "SocioChat.html";

}
