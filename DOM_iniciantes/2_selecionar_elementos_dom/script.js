// pelo Id
const animais = document.getElementById('animais');
console.log('pelo id', animais)
// animais.innerText = 'alterado pelo css'


// pela classe CSS
const gridSection = document.getElementsByClassName('grid-section')
console.log('pela classe css', gridSection)


// um elemento pelo seletor CSS
const primeiraLi = document.querySelector('li')
console.log('pelo querySelector', primeiraLi)

const primeiraUl = document.querySelector('ul');

console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

// todos elementos pelo seletor CSS
const animaisImg = document.querySelectorAll('.animais img')
console.log('pelo querySelectorAll', animaisImg)


// `HTMLCollection` vs `NodeList`
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)


gridSectionNode.forEach((value) => [
  console.log(value)
])

// transformar em Array
// agore ficou com os valores de forma estática
const arrayGrid = Array.from(gridSectionHTML)