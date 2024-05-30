$(document).ready(function () {

    let dishPrices = {
        "Predjelo1-Velika": 700,
        "Predjelo1-Mala": 500,
        "Predjelo2-Velika": 900,
        "Predjelo2-Mala": 600,
        "Predjelo3-Velika": 1200,
        "Predjelo3-Mala": 900,
        "GlavnoJelo1-Velika": 1900,
        "GlavnoJelo1-Mala": 1500,
        "GlavnoJelo2-Velika": 2000,
        "GlavnoJelo2-Mala": 1600,
        "GlavnoJelo3-Velika": 2300,
        "GlavnoJelo3-Mala": 1900,
        "Dezert1-Velika": 400,
        "Dezert1-Mala": 200,
        "Dezert2-Velika": 600,
        "Dezert2-Mala": 400,
        "Dezert3-Velika": 200,
        "Dezert3-Mala": 100
    }

    podaciLoad();
    korpaLoad();
    narudzbinaLoad();

    function podaciLoad() {
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        $("#email").attr("placeholder", activeUser.email);
        $("#username").attr("placeholder", activeUser.username);
        $("#password").attr("placeholder", activeUser.password);
        $("#address").attr("placeholder", activeUser.address);
    }

    $("#finalize").click(function() {
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        let finalPrice = 0;
        for (let i = 0; i < activeUser.basket.length; i++) { 
            console.log(activeUser.basket[i].amount);
            console.log(dishPrices[activeUser.basket[i].dish])
            finalPrice += activeUser.basket[i].amount * dishPrices[activeUser.basket[i].dish];
            console.log(finalPrice);
        }
        activeUser.orders.push(finalPrice);
        activeUser.basket = [];
        $("#orderItems").html("");
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
        saveActive();
        narudzbinaLoad();
    });

    function narudzbinaLoad() {
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        let strAll = "";
        for (let i = 0; i < activeUser.orders.length; i++) {
            strAll += `<div> <span> ` + wordsTranslator["Order"] + ` #` + (i + 1) + ` ` + wordsTranslator["Price"] + `: ` + activeUser.orders[i] + `</span> </div>`;
        }
        $("#paidItems").html(strAll);
    }
    
    function korpaLoad() {
        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
        let strAll = "";
        for (let i = 0; i < activeUser.basket.length; i++) {
            let dishAndSize = activeUser.basket[i].dish.split("-");
            let dishName = dishNames[dishAndSize[0]];
            let size = dishAndSize[1];
            let num = activeUser.basket[i].amount;
            strAll += `<div id="` + activeUser.basket[i].dish + `">
            <span>` + dishName + ` ` + dishSize[size] + ` x </span><span id="` + activeUser.basket[i].dish + `Number">` + num + `</span>
            <button class="dark-text" id="` + activeUser.basket[i].dish + `Inc" name="` + activeUser.basket[i].dish + `">` + wordsTranslator["Bigger"] + `</button>
            <button class="dark-text" id="` + activeUser.basket[i].dish + `Dec" name="` + activeUser.basket[i].dish + `">` + wordsTranslator["Smaller"] + `</button>
            <button class="dark-text" id="` + activeUser.basket[i].dish + `Del" name="` + activeUser.basket[i].dish + `">` + wordsTranslator["Delete"] + `</button>
            </div> `
        }

        $("#orderItems").html(strAll);
        for (let i = 0; i < activeUser.basket.length; i++) {
            document.querySelector("#" + activeUser.basket[i].dish + 'Inc').addEventListener("click", function () {
                let activeUser = JSON.parse(localStorage.getItem("activeUser"));
                let name = $(this).attr("name");
                let num;
                for (let i = 0; i < activeUser.basket.length; i++) { 
                    if(activeUser.basket[i].dish == name) {
                        activeUser.basket[i].amount++;
                        num = activeUser.basket[i].amount;
                        break;
                    }
                }
                $("#" + name + "Number").html("" + num);
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                saveActive();
            });
            document.querySelector("#" + activeUser.basket[i].dish + 'Dec').addEventListener("click", function () {
                let activeUser = JSON.parse(localStorage.getItem("activeUser"));
                let name = $(this).attr("name");
                let num;
                for (let i = 0; i < activeUser.basket.length; i++) { 
                    if(activeUser.basket[i].dish == name) {
                        if (activeUser.basket[i].amount <= 1) return;
                        activeUser.basket[i].amount--;
                        num = activeUser.basket[i].amount;
                        break;
                    }
                }
                $("#" + name + "Number").html("" + num);
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                saveActive();
            });
            document.querySelector("#" + activeUser.basket[i].dish + 'Del').addEventListener("click", function () {
                let activeUser = JSON.parse(localStorage.getItem("activeUser"));
                let name = $(this).attr("name");
                let num;
                activeUser.basket = activeUser.basket.filter((a) => {
                    return a.dish != name;
                });
                localStorage.setItem("activeUser", JSON.stringify(activeUser));
                saveActive();
                korpaLoad();
            });
        }
    }




});
