let dishes = [{
    dish: "Kung Pao Spicy Shrimp",
    price: 1,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Kung Pao Spicy Shrimp</h2>
        <p class="text-justified">
          Kung Pao Spicy Shrimp is a delicious dish that combines juicy shrimp with crispy peanuts and colorful vegetables, seasoned with chili peppers. This dish is full of flavor and textures, prepared in an aromatic sauce that further enriches its taste. With the addition of soy sauce and fragrant garlic, this dish will delight you with its combination of sweet, spicy, and salty flavors. Kung Pao Spicy Shrimp is the perfect choice for Asian cuisine enthusiasts who want to try something new and exciting.
          Price for large portion: 700 din, price for small portion: 500 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Predjelo1-KungPaoPikantKozice.jpg"
          alt="">
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
            Small portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion1">
            Large portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioBigPortion1">
            <input id="number1" type="number" step="1" max="10" value="1" name="quantity"
              class="quantity-field border-0 text-center w-25 dark-text">
            <button id="addToBag1">
              <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30"
              alt="">
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
    dish: "Chicken in Spicy Honey Sauce",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Chicken in Spicy Honey Sauce</h2>
        <p class="text-justified">
          Chicken in Spicy Honey Sauce is a delicious dish that combines juicy chicken pieces with sweet and spicy honey. This dish is the perfect combination of sweetness and spices, prepared to satisfy your taste buds. Marinated chicken is roasted to perfection, then drizzled with spicy honey sauce that adds richness of flavor. Served with a side dish of your choice, this chicken will satisfy even the most discerning guests with its extremely delicious and aromatic bites.
          Price for large portion: 900 din, price for small portion: 600 din
        </p>
        <img class="img-fluid img-thumbnail food-picture"
        src="../../../Slike/Predjelo2-PiletinaUPikantUmakuOdMeda.jpg" alt="">
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
            Small portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion2">
            Large portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioBigPortion2">
            <input id="number2" type="number" step="1" max="10" value="1" name="quantity"
              class="quantity-field border-0 text-center w-25 dark-text">
            <button id="addToBag2">
              <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30"
                alt="">
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
    dish: "Meat Rolls in Unagi Sauce",
    price: 3,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Meat Rolls in Unagi Sauce</h2>
        <p class="text-justified">
          Meat Rolls in Unagi Sauce is a delicious dish that combines juicy meat rolls with rich and aromatic unagi sauce. This dish is full of flavor and is prepared with care to make every bite perfect. The meat is carefully selected and shaped into rolls, then cooked in a tasty unagi sauce that adds a deep and complex flavor. Served with a side dish of your choice, these meat rolls will delight your taste buds and leave you craving for more.
          Price for large portion: 1200 din, price for small portion: 900 din
        </p>
        <img class="img-fluid img-thumbnail food-picture"
        src="../../../Slike/Predjelo3-MesneRolniceSaUnagiUmakom.jpg" alt="">
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
            Small portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion3">
            Large portion: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioBigPortion3">
            <input id="number3" type="number" step="1" max="10" value="1" name="quantity"
              class="quantity-field border-0 text-center w-25 dark-text">
            <button id="addToBag3">
              <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30"
                alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>`
}];