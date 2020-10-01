//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
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
User_Name = localStorage.getItem("User_Name");
document.getElementById("User_Name").innerHTML = "Welcome " + User_Name + "! :D";

function AddRoom() {
      Room_Name = document.getElementById("Room_Name").value;
      firebase.database().ref("/").child(Room_Name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("Room_Name", Room_Name);
      window.location = "SocioChat_Page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("Output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("Output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "SocioChat_Page.html";
}



function LogOut() {
      localStorage.removeItem("User_Name");
      localStorage.removeItem("Room_Name");
      window.location = "SocioChat.html";

}