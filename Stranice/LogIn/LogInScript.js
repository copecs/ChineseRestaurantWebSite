$(document).ready(function () {



    $("#logIn").click(function () {
        let username = $("#inputUsername").val();
        let password = $("#inputPassword").val();

        let users = JSON.parse(localStorage.getItem("users"));
        if (users != null) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].username == username && users[i].password == password) {
                    localStorage.setItem("activeUser", JSON.stringify(users[i]));
                    window.location.href = "../Pocetna/Pocetna.html"
                    return;
                }
            }
        }
        alert("Nepostoji dati korisnik!");
    });
});