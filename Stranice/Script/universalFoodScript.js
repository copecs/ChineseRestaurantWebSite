
function submitGrade(dishType, num, index) {
    let number = Number.parseInt($("#grade" + num).val());
    let grade = JSON.parse(localStorage.getItem("" + dishType + num));
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser.votedFor[index] == true) {
        alert(messageVoted);
        return;
    }
    if (grade == null) {
        grade = [number + 1];
        console.log("usao");
    }
    else {
        grade.push(number + 1);
    }
    activeUser.votedFor[index] = true;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    localStorage.setItem("" + dishType + num, JSON.stringify(grade));
    saveActive();
}

function addToBag(dishType, num) {
    let number = Number.parseInt($("#number" + num).val());
    let radioSmallButton = $('input[id=radioLittlePortion' + num + ']:checked').val();
    let radioBigButton = $('input[id=radioBigPortion' + num + ']:checked').val();
    let porcija = "";
    if (radioSmallButton == "on") {
        porcija = "Mala"
    }
    else if (radioBigButton == "on") {
        porcija = "Velika"
    }
    if (porcija == "") {
        alert(messageSelected);
        return;
    }
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    for (let i = 0; i < activeUser.basket.length; i++) {
        if (activeUser.basket[i].dish == "" + dishType + num + "-" + porcija) {
            activeUser.basket[i].amount += number;
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            return;
        }
    }
    activeUser.basket.push({
        dish: "" + dishType + num + "-" + porcija,
        amount: number
    });
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    saveActive();
}