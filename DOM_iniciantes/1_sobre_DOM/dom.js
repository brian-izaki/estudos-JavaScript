// acessando o DOM

// window.alert('ola brian')

const href = window.location.href;

console.log(href)

if(href === 'http://127.0.0.1:5500/DOM_iniciantes/sobre_DOM/index.html'){
  console.log('está dentro da página')
}

// Acessando o document do window
const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', (e) => {
  console.log('clicou em', h1Selecionado.innerText)
})
