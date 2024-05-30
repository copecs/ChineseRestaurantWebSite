$(document).ready(function () {

    function findAverage(list) {
        if (list == null) return '0';
        let n = 0;
        for (let i = 0; i < list.length; i++) {
            n += Number.parseInt(list[i]);
        }
        return n / list.length;
    }

    let curr = JSON.parse(localStorage.getItem("Predjelo1"));
    $("#Predjelo1").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("Predjelo2"));
    $("#Predjelo2").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("Predjelo3"));
    $("#Predjelo3").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("GlavnoJelo1"));
    $("#GlavnoJelo1").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("GlavnoJelo2"));
    $("#GlavnoJelo2").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("GlavnoJelo3"));
    $("#GlavnoJelo3").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("Dezert1"));
    $("#Dezert1").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("Dezert2"));
    $("#Dezert2").html("" + findAverage(curr));
    curr = JSON.parse(localStorage.getItem("Dezert3"));
    $("#Dezert3").html("" + findAverage(curr));


});