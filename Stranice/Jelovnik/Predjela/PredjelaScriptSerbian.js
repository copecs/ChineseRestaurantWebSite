let dishes = [{
    dish: "Kung Pao pikant gambori",
    price: 1,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Kung Pao pikant gambori</h2>
        <p class="text-justified">
        Kung Pao pikant gambori su ukusno jelo koje spaja sočne kozice sa hrskavim kikirikijem i šarenim povrćem, začinjeno čili papričicama. Ovo jelo je puno ukusa i tekstura, a priprema se u aromatičnom sosu koji dodatno obogaćuje njegov ukus. Uz dodatak sojinog umaka i mirisnog belog luka, ovo jelo će vas oduševiti svojom kombinacijom slatkog, pikantnog i slanog ukusa. Kung Pao pikant gambori su savršen izbor za ljubitelje azijske kuhinje koji žele da probaju nešto novo i uzbudljivo.
        Cena velike porcije: 700 din, cena male porcije: 500 din
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
            <button id="submitGrade1" class="dark-text">Oceni</button>
          </div>
          <div class="col-sm-6">
            Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion1">
            Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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
    dish: "Piletina u pikant umaku od meda",
    price: 2,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Piletina u pikant umaku od meda</h2>
        <p class="text-justified">
        Piletina u pikant umaku od meda je ukusno jelo koje spaja sočne komade piletine sa slatkim i pikantnim medom. Ovo jelo je savršena kombinacija slatkoće i začina, pripremljena da zadovolji vaše čulo ukusa. Marinirana piletina se peče do savršene hrskavosti, a zatim se preliva pikantnim umakom od meda koji dodaje bogatstvo ukusa. Servirana sa prilogom po želji, ova piletina će zadovoljiti i najprobirljivije goste svojim izrazito ukusnim i mirisnim zalogajima.
        Cena velike porcije: 900 din, cena male porcije: 600 din
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
            <button id="submitGrade2" class="dark-text">Oceni</button>
          </div>
          <div class="col-sm-6">
            Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion2">
            Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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
    dish: "Mesne rolnice u Umagi sosu",
    price: 3,
    html: `<div class="row">
    <div class="col-sm-12 center-items">
      <div class="border-for-food">
        <h2 class="food-header text-center text-bold">Mesne rolnice u Umagi sosu</h2>
        <p class="text-justified">
        Mesne rolnice u Umagi sosu su ukusno jelo koje spaja sočne rolnice mesa sa bogatim i aromatičnim umagi sosom. Ovo jelo je puno ukusa i priprema se sa pažnjom kako bi svaki zalogaj bio savršen. Meso je pažljivo odabrano i oblikovano u rolnice, a zatim kuvano u ukusnom Umagi sosu koji mu dodaje dubok i složen ukus. Servirane sa prilogom po izboru, ove mesne rolnice će oduševiti vaše čulo ukusa i ostaviti vas željnim još.
        Cena velike porcije: 1200 din, cena male porcije: 900 din
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
            <button id="submitGrade3" class="dark-text">Oceni</button>
          </div>
          <div class="col-sm-6">
            Mala porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
              id="radioLittlePortion3">
            Velika porcija: <input class="form-check-input" type="radio" name="flexRadioDefault"
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