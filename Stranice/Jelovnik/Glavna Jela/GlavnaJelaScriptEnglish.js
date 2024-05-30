let dishes = [{
    dish: "Spicy-Sour Chicken",
    price: 1,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
        <div class="border-for-food">
            <h2 class="food-header text-center text-bold">Spicy-Sour Chicken</h2>
            <p class="text-justified">
                Spicy-Sour Chicken is a delicious dish that combines juicy chicken pieces with a
                tangy and spicy sauce. This dish is the perfect balance of sourness and spiciness,
                prepared to delight your taste buds. Marinated chicken is cooked to perfection, then
                topped with a spicy sauce that adds richness to the flavor. Served with your choice
                of side, this chicken will satisfy even the most discerning guests with its
                exceptionally tasty and aromatic bites.
                Price for large portion: 1900 din, price for small portion: 1500 din
            </p>
            <img class="img-fluid img-thumbnail food-picture"
                src="../../../Slike/GlavnoJelo1-KiseloLjutaPiletina.jpeg" alt="">
            <br>
            <br>
            <div class="row">
                <div class="col-sm-3">
                    <input type="range" class=" range-food" id="grade1" min="0" max="4">
                </div>
                <div class="col-sm-3">
                    <button id="submitGrade1" class="dark-text">Rate</button>
                </div>
                <div class="col-sm-6">
                    Small Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioLittlePortion1">
                    Large Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioBigPortion1">
                    <input id="number1" type="number" step="1" max="10" value="1" name="quantity"
                        class="quantity-field border-0 text-center w-25 dark-text">
                    <button id="addToBag1">
                        <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg"
                            width="30" height="30" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
<br>`
},
{
    dish: "Traditional Noodles with Vegetables",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
        <div class="border-for-food">
            <h2 class="food-header text-center text-bold">Traditional Noodles with Vegetables</h2>
            <p class="text-justified">
                Traditional Noodles with Vegetables is a tasty dish that combines soft noodles with
                colorful vegetables, seasoned with aromatic sauce. This dish is rich in flavors and
                textures, prepared with care to ensure every bite is perfect. Soft noodles are
                combined with chopped vegetables and topped with a delicious sauce that adds depth
                to the flavor. Served as a main course, these traditional noodles will delight you
                with their freshness and full flavor.
                Price for large portion: 2000 din, price for small portion: 1600 din
            </p>
            <img class="img-fluid img-thumbnail food-picture"
                src="../../../Slike/GlavnoJelo2-TradicionalneNudleSaPovrcem.jpg" alt="">
            <br>
            <br>
            <div class="row">
                <div class="col-sm-3">
                    <input type="range" class=" range-food" id="grade2" min="0" max="4">
                </div>
                <div class="col-sm-3">
                    <button id="submitGrade2" class="dark-text">Rate</button>
                </div>
                <div class="col-sm-6">
                    Small Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioLittlePortion2">
                    Large Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioBigPortion2">
                    <input id="number2" type="number" step="1" max="10" value="1" name="quantity"
                        class="quantity-field border-0 text-center w-25 dark-text">
                    <button id="addToBag2">
                        <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg"
                            width="30" height="30" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<br>
<br>`
},
{
    dish: "Chinese Salad",
    price: 3,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
        <div class="border-for-food">
            <h2 class="food-header text-center text-bold">Chinese Salad</h2>
            <p class="text-justified">
                Chinese Salad is a refreshing dish that combines crispy vegetables with a delicious
                soy sauce and sesame dressing. This salad is the perfect combination of crispiness
                and juiciness, prepared to satisfy your taste buds. Chopped vegetables are combined
                with crispy fried sesame seeds and dressed with a refreshing soy sauce dressing.
                Served as a light meal or side dish, this Chinese salad will win you over with its
                unique flavor and textures.
                Price for large portion: 2300 din, price for small portion: 1900 din
            </p>
            <img class="img-fluid img-thumbnail food-picture"
                src="../../../Slike/GlavnoJelo3-KineskaSalata.jpg" alt="">
            <br>
            <br>
            <div class="row">
                <div class="col-sm-3">
                    <input type="range" class=" range-food" id="grade3" min="0" max="4">
                </div>
                <div class="col-sm-3">
                    <button id="submitGrade3" class="dark-text">Rate</button>
                </div>
                <div class="col-sm-6">
                    Small Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioLittlePortion3">
                    Large Portion: <input class="form-check-input" type="radio"
                        name="flexRadioDefault" id="radioBigPortion3">
                    <input id="number3" type="number" step="1" max="10" value="1" name="quantity"
                        class="quantity-field border-0 text-center w-25 dark-text">
                    <button id="addToBag3">
                        <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg"
                            width="30" height="30" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<br>
<br>`
}];