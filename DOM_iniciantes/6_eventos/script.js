
const img = document.querySelector('img')

img.addEventListener('click', (event) => {
  console.log('img')
  console.log('dados sobre o elemento', event)
})

function callback() {
  console.log('img')
  console.log('clicado')
}

// é passado uma referencia da função, 
// caso tente executar a funçao ali, dará undefined
img.addEventListener('click', callback)


const animaisLista = document.querySelector('.animais-lista');

function callbackLista(e) {
  console.log('---')
  console.log('animais-lista')
  console.log('target', e.target)
  console.log('current target', e.currentTarget)
  console.log('type', e.type)
  console.log('path', e.path)
}

animaisLista.addEventListener('click', callbackLista)

// previnir o comportamento padrão de um elemento
const  linkExterno = document.querySelector('a[href^="http"]')
linkExterno.addEventListener('click', (e) => {
  e.preventDefault()
})


const h1 = document.querySelector('h1');

function handleEvent(e){
  console.log('eventos')
  console.log(e.type, e)
}

h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)


// window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)
window.addEventListener('keydown', handleEvent)

function handleKeyboard(e) {
  if (e.key === 'a')
    document.body.classList.toggle('azul')
}

window.addEventListener('keydown', handleKeyboard)

// for each

const imgs = document.querySelectorAll('img');

function handleImg(e) {
  console.log('-***-')
  console.log('para cada imagem')
  console.log(e.target)
  console.log('-***-')
}

imgs.forEach(img => {
  img.addEventListener('click', handleImg)
})