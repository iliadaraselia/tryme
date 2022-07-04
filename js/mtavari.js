const slides = [
  {
    img: "https://dw9to29mmj727.cloudfront.net/promo/2016/5344-SeriesHeaders_MHA_v2_2000x800_wm.jpg",
    name: "boku no hero academia",
    rating: " 4.5/5 ",
  },
  {
    img: "https://animegalaxyofficial.com/wp-content/uploads/2022/03/attack-on-titan-new-movie-and-mappa-new-studio-2.png",
    name: "atack on titans",
    rating: "6/5",
  },
  {
    img: "https://as01.epimg.net/meristation_en/imagenes/2022/03/18/news/1647559277_473554_1647559628_noticia_normal_recorte1.jpg",
    name: "dragons ball",
    rating: "4/5",
  },
  {
    img: "https://animegalaxyofficial.com/wp-content/uploads/2022/06/1654586838052-min-scaled.jpg",
    name: "One Piece Goes On Hiatus As Oda Prepares For The 'Final Saga'",
    rating: "3/5",
  },
  {
    img: "https://animegalaxyofficial.com/wp-content/uploads/2022/06/hunter-x-hunter-return-1.jpg",
    name: "Berserk Set To Return This Summer With New Manga Chapters",
    rating: "  10/5 ",
  },
];

const image = document.querySelector(".backgroung-img");
const descrip = document.querySelector(".description");
const rete = document.querySelector(".stars");

////  buttons
const prew = document.querySelector(".previuos");
const next = document.querySelector(".next");
// slide btn
const slideBtn1 = document.getElementById("slide-1");
const slideBtn2 = document.getElementById("slide-2");
const slideBtn3 = document.getElementById("slide-3");
const slideBtn4 = document.getElementById("slide-4");
const slideBtn5 = document.getElementById("slide-5");

let pagecount = 0;

function renderSlider() {
  rete.textContent = slides[pagecount].rating;
  descrip.textContent = slides[pagecount].name;
  image.src = slides[pagecount].img;
}
prew.addEventListener("click", function () {
  pagecount -= 1;
  if (pagecount < 0) {
    pagecount = 4;
  }
  renderSlider();
});
next.addEventListener("click", function () {
  pagecount += 1;
  if (pagecount > 4) {
    pagecount = 0;
  }
  renderSlider();
});

slideBtn1.addEventListener("click", function () {
  pagecount = 0;
  renderSlider();
  Interval;
});
slideBtn2.addEventListener("click", function () {
  pagecount = 1;
  renderSlider();
});
slideBtn3.addEventListener("click", function () {
  pagecount = 2;
  renderSlider();
});
slideBtn4.addEventListener("click", function () {
  pagecount = 3;
  renderSlider();
});
slideBtn5.addEventListener("click", function () {
  pagecount = 4;
  renderSlider();
});

const Interval = setInterval(autoChange, 4000);
function autoChange() {
  pagecount += 1;
  if (pagecount > 4) {
    pagecount = 0;
  }
  renderSlider();
}

renderSlider();
