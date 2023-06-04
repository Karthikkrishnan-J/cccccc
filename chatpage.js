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
function logout(){
    window.location="index.html"
}
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function sendmsg() {
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message: msg,
            name: Name,
            likes: 0
      });
      document.getElementById("msg").value = "";
}