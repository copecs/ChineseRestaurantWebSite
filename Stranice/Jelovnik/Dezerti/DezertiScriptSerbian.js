let dishes = [{
    dish: "Knedle sa voćem",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Knedle sa voćem</h2>
        <p class="text-justified">
          Knedle sa voćem su tradicionalno jelo koje se sastoji od mekanih knedli punjenih raznovrsnim voćem poput šljiva, jagoda ili višanja. Ove sočne knedle se posipaju šećerom i poslužuju tople, praveći savršenu kombinaciju slatkog voća i mekanog testa. Ovo jelo je omiljen izbor za desert ili lagani obrok tokom toplih letnjih dana.
          Cena velike porcije: 400 din, cena male porcije: 200 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert1-KnedleSaVocem.jpg" alt="">
        <br>
        <br>
        <div class="row">
          <div class="col-sm-3">
            <input type="range" class=" range-food" id="grade1" min="0" max="4">
          </div>
          <div class="col-sm-3">
            <button id="submitGrade1" class="dark-text">Oceni</button>
          </div>
          <div class="col-sm-6">
            Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
            id="radioLittlePortion1">
          Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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
    dish: "Slatko ljuta piletina",
    price: 3,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Slatko ljuta piletina</h2>
        <p class="text-justified">
          Slatko ljuta piletina je ukusno jelo koje kombinuje slatke i pikantne arome na savršen način. Komadići sočnog pilećeg mesa se karamelizuju u slatkom i ljutom umaku, obogaćeni aromatičnim začinima poput đumbira, belog luka i crvene paprike. Ova jela se često poslužuje uz pirinač ili kriške svježe povrće, pružajući bogat i uravnotežen obrok.
          Cena velike porcije: 600 din, cena male porcije: 400 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert2-SlatkoLjutaPiletina.jpg"alt="">
        <br>
        <br>
        <div class="row">
          <div class="col-sm-3">
            <input type="range" class=" range-food" id="grade2" min="0" max="4">
          </div>
          <div class="col-sm-3">
            <button id="submitGrade2" class="dark-text">Oceni</button>
          </div>
          <div class="col-sm-6">
            Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
            id="radioLittlePortion2">
          Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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
    dish: "Mesečev kolač",
    price: 1,
    html: `
    <div class="row">
          <div class="col-sm-12 center-items">
            <div class="border-for-food">
              <h2 class="food-header text-center text-bold">Mesečev kolač</h2>
              <p class="text-justified">
                Mesečev kolač je fantastična poslastica koja će očarati vaše nepce. Ovaj kolač se sastoji od nežnog sloja biskvita prelivenog kremastom čokoladnom glazurom, ukrašenog mesečevim oblicima od šećera. Svaki zalogaj ovog kolača pruža neodoljivu kombinaciju čokolade i vanile, čineći ga savršenim izborom za sve ljubitelje slatkiša.
                Cena velike porcije: 200 din, cena male porcije: 100 din
              </p>
              <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/Dezert3-MesecevKolac.jpg"alt="">
              <br>
              <br>
              <div class="row">
                <div class="col-sm-3">
                  <input type="range" class=" range-food" id="grade3" min="0" max="4">
                </div>
                <div class="col-sm-3">
                  <button id="submitGrade3" class="dark-text">Oceni</button>
                </div>
                <div class="col-sm-6">
                  Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
                  id="radioLittlePortion3">
                Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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