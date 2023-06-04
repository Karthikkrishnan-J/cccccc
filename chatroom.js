const firebaseConfig = {
    apiKey: "AIzaSyAikru3R2niEPbtA_YZHk-CKVJ1hrJsMyo",
    authDomain: "c-95-ddb0c.firebaseapp.com",
    databaseURL: "https://c-95-ddb0c-default-rtdb.firebaseio.com",
    projectId: "c-95-ddb0c",
    storageBucket: "c-95-ddb0c.appspot.com",
    messagingSenderId: "122490657178",
    appId: "1:122490657178:web:00b0d5940e1a0f3b028223",
    measurementId: "G-KQDM5J7N8S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var user = localStorage.getItem("user_name");
document.getElementById("name").innerHTML=user+"!!";
function addroom(){
    var room_name = document.getElementById("input").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      window.location = "chatpage.html";
}
function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
         snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
Room_names = childKey;
//Start code
                  room = "<div id=" + Room_names + " onclick='redirect_room(this.id)' class='room_name'>" + Room_names + "</div>";
                  document.getElementById("output").innerHTML = room;
//End code
});});}
getData();
function redirect_room(room_name) {
    console.log("Room name = " + room_name);
    localStorage.setItem("room_name", room_name);
    window.location="chatpage.html";
}
function logout(){
    window.location="index.html"
}