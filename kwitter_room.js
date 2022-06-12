
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAJr0dE-TrGQNCWSEOhr8q7JDmHlkdL9KU",
      authDomain: "project93-ded7d.firebaseapp.com",
      databaseURL: "https://project93-ded7d-default-rtdb.firebaseio.com",
      projectId: "project93-ded7d",
      storageBucket: "project93-ded7d.appspot.com",
      messagingSenderId: "1006983751908",
      appId: "1:1006983751908:web:155c969299bce214c9e4f1",
      measurementId: "G-NJG457H08T"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row

      //End cod
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}