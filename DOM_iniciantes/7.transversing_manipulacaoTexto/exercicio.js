// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy')

const menuDuplicado = menu.cloneNode(true);

copy.appendChild(menu)


// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector('.faq-lista')
console.log(dl.children[0])

// Selecione o DD referente ao primeiro DT
console.log(dl.children[0].nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML