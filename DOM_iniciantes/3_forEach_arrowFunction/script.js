const imgs = document.querySelectorAll('img')

// let i = 0;
// imgs.forEach(function(img, index, array) {
//   console.log(img, index, array)
// });

const titulos = document.getElementsByClassName('titulo')
const arrayTitulos = Array.from(titulos)

// utilizando arrow function
arrayTitulos.forEach((titulo) => {
  console.log(titulo)
})

arrayTitulos.forEach(titulo => {
  console.log(titulo)
})

arrayTitulos.forEach(titulo => console.log(titulo))