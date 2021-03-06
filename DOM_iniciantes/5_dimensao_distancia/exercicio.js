// Verifique a distância da primeira imagem
// em relação ao topo da página
const firsImage = document.querySelector("img");
console.log(firsImage.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");

function somaImagens() {
  let totalWidth = 0;

  imgs.forEach((img) => {
    totalWidth += img.offsetWidth;
  });

  console.log(totalWidth);
}

// usado onload por causa da demora no carregamento da imagem.
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  
  let hasSizeRecomended = link.offsetWidth >= 48 && link.offsetHeight >= 48;

  if (hasSizeRecomended) {
    console.log(link, "foi aprovado");
  } else {
    console.log(link, "não foi aprovado");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const small = window.matchMedia(" (max-width: 720px) ");

if (small.matches) {
  menu.classList.add("menu-mobile");
  console.log('adicionado menu-mobile na classe menu')
}
