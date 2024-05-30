$(document).ready(function () {



    $("#signUp").click(function () {
        let email = $("#inputEmail").val();
        let username = $("#inputUsername").val();
        let password = $("#inputPassword").val();
        let address = $("#inputAddress").val();
        let array = new Array(9).fill(false);

        let users = JSON.parse(localStorage.getItem("users"));
        let user = {
            email: email,
            username: username,
            password: password,
            address: address,
            basket: [],
            orders: [[]],
            votedFor: array
        }
        if (users == null) {
            users = [user];
        }
        else {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == email || users[i].username == username) {
                    if(users[i].email == email) {
                        alert("Email već postoji!");
                    }
                    else {
                        alert("Username već postoji!");
                    }
                    return;
                }
            }
            users.push(user)
        }
        localStorage.setItem("activeUser", JSON.stringify(user));
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "../Pocetna/Pocetna.html"
    });
});