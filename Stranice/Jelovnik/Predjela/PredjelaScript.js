// grade1
// submitGrade1
// number1
// addToBag1

$(document).ready(function() {

    $("#submitGrade1").click(function() {
        let number = Number.parseInt($("#grade1").val());
        let grade = JSON.parse(localStorage.getItem("Predjelo1"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[0] == true) {
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
        activeUser.votedFor[0] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("Predjelo1", JSON.stringify(grade));
    });

    $("#addToBag1").click(function() {
        let number = Number.parseInt($("#number1").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "Predjelo1") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "Predjelo1",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });

    $("#submitGrade2").click(function() {
        let number = Number.parseInt($("#grade2").val());
        let grade = JSON.parse(localStorage.getItem("Predjelo2"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[1] == true) {
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
        activeUser.votedFor[1] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("Predjelo2", JSON.stringify(grade));
    });

    $("#addToBag2").click(function() {
        let number = Number.parseInt($("#number2").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "Predjelo2") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "Predjelo2",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });

    $("#submitGrade3").click(function() {
        let number = Number.parseInt($("#grade3").val());
        let grade = JSON.parse(localStorage.getItem("Predjelo3"));
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser.votedFor[2] == true) {
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
        activeUser.votedFor[2] = true;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        localStorage.setItem("Predjelo3", JSON.stringify(grade));
    });

    $("#addToBag3").click(function() {
        let number = Number.parseInt($("#number3").val());
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        for (let i = 0; i < activeUser.basket.length; i++) {
            if (activeUser.basket[i].dish == "Predjelo3") {
                activeUser.basket[i].amount += number;
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                return;
            }
        }
        activeUser.basket.push({
            dish: "Predjelo3",
            amount: number
        });
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    });


});