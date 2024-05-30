
$(document).ready(function() {

    function submitGrade1() {
        submitGrade("Dezert", "1", 6);
    }

    function submitGrade2() {
        submitGrade("Dezert", "2", 7);
    }

    function submitGrade3() {
        submitGrade("Dezert", "3", 8);
    }

    function addToBag1() {
        addToBag("Dezert", "1");
    }

    function addToBag2() {
        addToBag("Dezert", "2");
    }

    function addToBag3() {
        addToBag("Dezert", "3");
    }

    $("#sortButton").click(function() {
        let radioNameButton = $('input[id=radioNameSort]:checked').val();
        let radioPriceButton = $('input[id=radioPriceSort]:checked').val();
        if (radioNameButton == 'on') {
            console.log("sortirano po imenu");
            dishes = dishes.sort((a, b) => {
                if (a.dish > b.dish) return 1;
                else if (a.dish < b.dish) return -1;
                return 0;
            })
        }
        else if (radioPriceButton == 'on') {
            console.log("sortirano po ceni");
            dishes = dishes.sort((a, b) => {
                if (a.price > b.price) return 1;
                else if (a.price < b.price) return -1;
                return 0;
            })
        }
        console.log(dishes[0].dish);
        console.log(dishes[1].dish);
        console.log(dishes[2].dish);
        $("#dishes").html(dishes[0].html + dishes[1].html + dishes[2].html);
        document.querySelector('#submitGrade1').addEventListener("click", submitGrade1);
        document.querySelector('#submitGrade2').addEventListener("click", submitGrade2);
        document.querySelector('#submitGrade3').addEventListener("click", submitGrade3);
        document.querySelector('#addToBag1').addEventListener("click", addToBag1);
        document.querySelector('#addToBag2').addEventListener("click", addToBag2);
        document.querySelector('#addToBag3').addEventListener("click", addToBag3);
        console.log("ispis");
    });


    $("#submitGrade1").click(submitGrade1);

    $("#addToBag1").click(addToBag1);

    $("#submitGrade2").click(submitGrade2);

    $("#addToBag2").click(addToBag2);

    $("#submitGrade3").click(submitGrade3);

    $("#addToBag3").click(addToBag3);



});