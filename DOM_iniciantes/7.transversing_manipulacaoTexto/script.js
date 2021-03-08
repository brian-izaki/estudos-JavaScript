// manipulando textos
const h1 = document.querySelector('h1')

h1.innerHTML = '<p>teste</p>'
h1.innerText = '<p>teste</p>'

console.log(h1.innerHTML)
console.log(h1.outerHTML)
console.log(h1.innerText)


// TRANSVERSING

console.log('---')
console.log('TRANSVERSING')
const lista = document.querySelector('.animais-lista')

// ELEMENTS
console.log('elemento pai', lista.parentElement)
console.log('elemento próximo irmão', lista.nextElementSibling)
console.log('elemento imrão anterior', lista.previousElementSibling)

console.log('filhos', lista.children)
console.log('-----')

// NODES
console.log('node pai', lista.parentNode)
console.log('node próximo irmão', lista.nextSibling)
console.log('node irmão anterior', lista.previousSibling)

console.log('node filhos', lista.childNodes)


// MOVENDO ELEMENTOS 

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = contato.querySelector('.mapa')
const copy = document.querySelector('.copy')

// animais.appendChild(titulo)
contato.insertBefore(animais, titulo)
contato.removeChild(titulo)
contato.replaceChild(animais, mapa)


const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo título'
novoH1.classList.add('titulo')
console.log(novoH1)
copy.appendChild(novoH1)

console.log(novoH1)

const menu = document.querySelector('.menu')
const faq = document.querySelector('.faq-lista')

const cloneMenu = menu.cloneNode(true)
console.log(cloneMenu)
faq.appendChild(cloneMenu)