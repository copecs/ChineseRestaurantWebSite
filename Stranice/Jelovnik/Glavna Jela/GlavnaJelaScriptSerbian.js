let dishes = [{
    dish: "Kiselo ljuta piletina",
    price: 1,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Kiselo ljuta piletina</h2>
        <p class="text-justified">
        Kiselo ljuta piletina je ukusno jelo koje kombinuje sočne komade piletine sa kiselim i pikantnim sosom. Ovo jelo je prava kombinacija kiselosti i ljutine, pripremljena da zadovolji vaša čula ukusa. Marinirana piletina se peče do savršenstva, a zatim se preliva pikantnim sosom koji dodaje bogatstvo ukusa. Poslužena sa prilogom po želji, ova piletina će zadovoljiti čak i najzahtevnije goste svojim izuzetno ukusnim i aromatičnim zalogajima.              </p>
        Cena velike porcije: 1900 din, cena male porcije: 1500 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/GlavnoJelo1-KiseloLjutaPiletina.jpeg" alt="">
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
    dish: "Tradicionalne nudle sa povrćem",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Tradicionalne nudle sa povrćem</h2>
        <p class="text-justified">
        Tradicionalne nudle sa povrćem su ukusno jelo koje spaja mekane nudle sa šarenim povrćem, začinjeno aromatičnim sosom. Ovo jelo je bogato ukusima i teksturama, pripremljeno sa pažnjom kako bi svaki zalogaj bio savršen. Mekane nudle se kombinuju sa seckanim povrćem i prelivaju ukusnim sosom koji dodaje dubinu ukusa. Poslužene kao glavno jelo, ove tradicionalne nudle će vas oduševiti svojom svežinom i punim ukusom.              </p>
        Cena velike porcije: 2000 din, cena male porcije: 1600 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/GlavnoJelo2-TradicionalneNudleSaPovrcem.jpg"alt="">
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
    dish: "Kineska salata",
    price: 3,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Kineska salata</h2>
        <p class="text-justified">
        Kineska salata je osvežavajuće jelo koje kombinuje hrskavo povrće sa ukusnim dresingom od soja sosa i susama. Ova salata je savršen spoj hrskavosti i sočnosti, pripremljena da zadovolji vaša čula ukusa. Seckano povrće se kombinuje sa hrskavim prženim susamom i preliva se osvežavajućim dresingom od soja sosa. Poslužena kao lagani obrok ili prilog, ova kineska salata će vas osvojiti svojim jedinstvenim ukusom i teksturama.              </p>
        Cena velike porcije: 2300 din, cena male porcije: 1900 din
        </p>
        <img class="img-fluid img-thumbnail food-picture" src="../../../Slike/GlavnoJelo3-KineskaSalata.jpg"alt="">
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