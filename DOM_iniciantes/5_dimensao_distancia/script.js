window.onload = function () {
  const listaAnimais = document.querySelector(".animais-lista");

  const height = listaAnimais.scrollHeight;
  console.log('altura com scroll de animais lista', height);

  const animaisTop = listaAnimais.offsetTop;
  console.log(animaisTop);

  const primeiroH2 = document.querySelector("h2");
  const h2Left = primeiroH2.offsetLeft;

  const rect = primeiroH2.getBoundingClientRect();

  console.log(h2Left);
  console.log(rect);

  console.log(innerWidth, outerHeight, pageYOffset);

  // media query no JS
  const small = window.matchMedia("(max-width: 900px)");
  console.log(small);
};
