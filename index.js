let movies = [];

for (let i = 0; i < 18; i++) {
  let oggetto = {
    url_img: `${i + 1}.png`, // Esempio di URL per immagini
    isTrending: Math.random() < 0.5, // Genera casualmente true o false per isTrending
    isAgain: Math.random() < 0.5, // Genera casualmente true o false per isAgain
    isNew: Math.random() < 0.5, // Genera casualmente true o false per isNew
  };
  movies.push(oggetto);
}

movies.sort(() => Math.random() - 0.5);

const trend = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].isTrending) trend.push(movies[i]);
}

const again = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].isAgain) again.push(movies[i]);
}

const newM = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].isNew) newM.push(movies[i]);
}

const carosel = document.querySelector("#carouselExample .carousel-inner");

const end_for =
  trend.length % 6 === 0
    ? Math.floor(trend.length / 6)
    : Math.floor(trend.length / 6) + 1;

for (let x = 0; x < end_for; x++) {
  carosel.innerHTML += `<div id="trend_item_${x}" class="carousel-item ${
    x === 0 ? "active" : ""
  }"></div>`;
  const carosel__item = document.querySelector(
    `#carouselExample .carousel-inner #trend_item_${x}`
  );

  let offset = 0;

  if (x === end_for - 1) {
    offset = trend.length % 6 === 0 ? 6 : trend.length % 6;
  } else {
    offset = 6;
  }

  let html__item = "";
  let cont = 0;
  for (let i = x * 6; i < x * 6 + offset; i++) {
    cont++;
    html__item += `
 <div class="card__wrapper col-6 col-sm-4 col-md-3 col-lg-2
    ${cont === 3 ? "d-none d-sm-block" : ""}
    ${cont === 4 ? "d-none d-md-block" : ""}
    ${cont === 5 ? "d-none d-lg-block" : ""}
    ${cont === 6 ? "d-none d-xl-block" : ""}
 ">
    <div class="card" >
        <img src="./assets/${
          trend[i].url_img
        }" class="card-img-top" alt="..." />
    </div>
 </div>`;
  }
  carosel__item.innerHTML += `<div class='row gx-1 justify-content-center'>${html__item}</div>`;
}

const carosel_again = document.querySelector("#again .carousel-inner");

const end_for_again =
  again.length % 6 === 0
    ? Math.floor(again.length / 6)
    : Math.floor(again.length / 6) + 1;

for (let x = 0; x < end_for_again; x++) {
  carosel_again.innerHTML += `<div id="again_item_${x}" class="carousel-item ${
    x === 0 ? "active" : ""
  }"></div>`;
  const carosel__item = document.querySelector(
    `#again .carousel-inner #again_item_${x}`
  );
  let offset = 0;

  if (x === end_for_again - 1) {
    offset = again.length % 6 === 0 ? 6 : again.length % 6;
  } else {
    offset = 6;
  }

  let html__item = "";
  let cont = 0;
  for (let i = x * 6; i < x * 6 + offset; i++) {
    cont++;
    html__item += `
 <div class="card__wrapper col-6 col-sm-4 col-md-3 col-lg-2
    ${cont === 3 ? "d-none d-sm-block" : ""}
    ${cont === 4 ? "d-none d-md-block" : ""}
    ${cont === 5 ? "d-none d-lg-block" : ""}
    ${cont === 6 ? "d-none d-xl-block" : ""}
 ">
    <div class="card" >
        <img src="./assets/${
          again[i].url_img
        }" class="card-img-top" alt="..." />
    </div>
 </div>`;
  }
  carosel__item.innerHTML += `<div class='row gx-1 justify-content-center'>${html__item}</div>`;
}

const carosel_new = document.querySelector("#new .carousel-inner");

const end_for_new =
  newM.length % 6 === 0
    ? Math.floor(newM.length / 6)
    : Math.floor(newM.length / 6) + 1;

for (let x = 0; x < end_for_new; x++) {
  carosel_new.innerHTML += `<div id="new_item_${x}" class="carousel-item ${
    x === 0 ? "active" : ""
  }"></div>`;
  const carosel__item = document.querySelector(
    `#new .carousel-inner #new_item_${x}`
  );
  let offset = 0;

  if (x === end_for_new - 1) {
    offset = newM.length % 6 === 0 ? 6 : newM.length % 6;
  } else {
    offset = 6;
  }

  let html__item = "";
  let cont = 0;
  for (let i = x * 6; i < x * 6 + offset; i++) {
    cont++;
    html__item += `
 <div class="card__wrapper col-6 col-sm-4 col-md-3 col-lg-2
    ${cont === 3 ? "d-none d-sm-block" : ""}
    ${cont === 4 ? "d-none d-md-block" : ""}
    ${cont === 5 ? "d-none d-lg-block" : ""}
    ${cont === 6 ? "d-none d-xl-block" : ""}
 ">
    <div class="card" >
        <img src="./assets/${newM[i].url_img}" class="card-img-top" alt="..." />
    </div>
 </div>`;
  }
  carosel__item.innerHTML += `<div class='row gx-1 justify-content-center'>${html__item}</div>`;
}

let agains = document.querySelector("#again_wrapper");
let trends = document.querySelector("#trend_wrapper");
let news = document.querySelector("#new_wrapper");

const animation_handler = function () {
  let again_pos = agains.getBoundingClientRect().top;
  let trend_pos = trends.getBoundingClientRect().top;
  let new_pos = news.getBoundingClientRect().top;

  let altezzaFinestra = window.innerHeight;

  if (again_pos + 150 < altezzaFinestra) {
    agains.classList.add("mostra-animazione");
  }
  if (again_pos + 100 > altezzaFinestra) {
    agains.classList.remove("mostra-animazione");
  }
  if (trend_pos < altezzaFinestra) {
    trends.classList.add("mostra-animazione");
  }
  if (trend_pos + 100 > altezzaFinestra) {
    trends.classList.remove("mostra-animazione");
  }
  if (new_pos + 150 < altezzaFinestra) {
    news.classList.add("mostra-animazione");
  }
  if (new_pos + 100 > altezzaFinestra) {
    news.classList.remove("mostra-animazione");
  }
};

window.addEventListener("scroll", function () {
  animation_handler();
});

window.addEventListener("resize", function () {
  animation_handler();
});

animation_handler();
