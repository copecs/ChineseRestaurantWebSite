let dishes = [{
    dish: "Fruit Dumplings",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Fruit Dumplings</h2>
        <p class="text-justified">
          Fruit dumplings are a traditional dish consisting of soft dumplings filled with various fruits such as plums, strawberries, or cherries. These juicy dumplings are sprinkled with sugar and served warm, making a perfect combination of sweet fruit and soft dough. This dish is a favorite choice for dessert or a light meal during warm summer days.
          Price for a large portion: 400 din, price for a small portion: 200 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert1-KnedleSaVocem.jpg" alt="">
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
            <input id="number1" type="number" step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25 dark-text">
            <button id="addToBag1">
              <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30" alt="">
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
    dish: "Sweet and Spicy Chicken",
    price: 3,
    html: `        <div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Sweet and Spicy Chicken</h2>
        <p class="text-justified">
          Sweet and spicy chicken is a delicious dish that combines sweet and spicy flavors perfectly. Juicy pieces of chicken are caramelized in a sweet and spicy sauce, enriched with aromatic spices like ginger, garlic, and red pepper. This dish is often served with rice or slices of fresh vegetables, providing a rich and balanced meal.
          Price for a large portion: 600 din, price for a small portion: 400 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert2-SlatkoLjutaPiletina.jpg" alt="">
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
            <input id="number2" type="number" step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25 dark-text">
            <button id="addToBag2">
              <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30" alt="">
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
    dish: "Moon Cake",
    price: 1,
    html: `
    <div class="row">
          <div class="col-sm-12 center-items">
            <div class="border-for-food">
              <h2 class="food-header text-center text-bold">Moon Cake</h2>
              <p class="text-justified">
                Moon cake is a fantastic treat that will enchant your taste buds. This cake consists of a tender layer of sponge cake topped with creamy chocolate glaze, decorated with moon-shaped sugar figures. Every bite of this cake offers an irresistible combination of chocolate and vanilla, making it a perfect choice for all dessert lovers.
                Price for a large portion: 200 din, price for a small portion: 100 din
              </p>
              <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert3-MesecevKolac.jpg" alt="">
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
                  <input id="number3" type="number" step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25 dark-text">
                  <button id="addToBag3">
                    <img class="img-fluid img-thumbnail" src="../../../Slike/shopping-cart.jpg" width="30" height="30" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br>
        <br>`
}];