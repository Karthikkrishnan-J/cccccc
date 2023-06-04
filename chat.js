function login() {
    var user_name = document.getElementById("user").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chatroom.html";
}