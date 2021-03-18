// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const input = document.querySelector('#cep')
const btn = document.querySelector('button');
const enderecoSpan = document.querySelector('#endereco')
let CEP = '';

function handleInput(e) {
  e.preventDefault();
  CEP = e.target.value;
  console.log(e.target.value)
}

function pegaInput(e) {
  e.preventDefault()
  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const bairro = json.bairro || 'sem informação'
      enderecoSpan.innerHTML = `Bairro: ${bairro}, na cidade: ${json.localidade}/${json.uf}`
    })
}

input.addEventListener('change', handleInput)
btn.addEventListener('click', pegaInput)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const bitcoin = document.querySelector('#bitcoin')

function buscaBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(json => {
      const value = json.BRL.buy.toString().replace('.', ',');
      bitcoin.innerHTML = `valor de compra do bitcoin: ${json.BRL.symbol} ${value}`
    })
}

buscaBitcoin()

setInterval(() => {
  buscaBitcoin()
}, 30 * 1000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const citacao = document.querySelector('blockquote')
const btnNorris = document.querySelector('#norris')

function geraCitacao(e) {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
      citacao.innerHTML = json.value
    })
}

geraCitacao()

btnNorris.addEventListener('click', geraCitacao)