
$(document).ready(function() {

    $("#submitGrade1").click(function() {
        let number = Number.parseInt($("#grade1").val());
        let grade = JSON.parse(localStorage.getItem("GlavnoJelo1"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[3] == true) {
            alert("Već je glasano za ovog korisnika!");
            return;
        }
        if (grade == null) {
            grade = {
                grade: number,
                size: 1
            }
            console.log("usao");
        }
        else {
            grade.grade = (grade.grade * grade.size + number) / (grade.size + 1);
            grade.size += 1;
        }
        activeUser.votedFor[3] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("GlavnoJelo1", JSON.stringify(grade));
    });

    $("#addToBag1").click(function() {
        let number = Number.parseInt($("#number1").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "GlavnoJelo1") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "GlavnoJelo1",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });

    $("#submitGrade2").click(function() {
        let number = Number.parseInt($("#grade2").val());
        let grade = JSON.parse(localStorage.getItem("GlavnoJelo2"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[4] == true) {
            alert("Već je glasano za ovog korisnika!");
            return;
        }
        if (grade == null) {
            grade = {
                grade: number,
                size: 1
            }
        }
        else {
            grade.grade = (grade.grade * grade.size + number) / (grade.size + 1);
            grade.size += 1;
        }
        activeUser.votedFor[4] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("GlavnoJelo2", JSON.stringify(grade));
    });

    $("#addToBag2").click(function() {
        let number = Number.parseInt($("#number2").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "GlavnoJelo2") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "GlavnoJelo2",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });

    $("#submitGrade3").click(function() {
        let number = Number.parseInt($("#grade3").val());
        let grade = JSON.parse(localStorage.getItem("GlavnoJelo3"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[5] == true) {
            alert("Već je glasano za ovog korisnika!");
            return;
        }
        if (grade == null) {
            grade = {
                grade: number,
                size: 1
            }
        }
        else {
            grade.grade = (grade.grade * grade.size + number) / (grade.size + 1);
            grade.size += 1;
        }
        activeUser.votedFor[5] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("GlavnoJelo3", JSON.stringify(grade));
    });

    $("#addToBag3").click(function() {
        let number = Number.parseInt($("#number3").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "GlavnoJelo3") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "GlavnoJelo3",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });


});