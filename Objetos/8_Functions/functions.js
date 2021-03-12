function soma(n1, n2, n3) {
  return n1 + n2;
}

console.log(soma(2, 2))
console.log('length', soma.length)
console.log('nome', soma.name)


console.log('********')


function darOi(nome) {
  console.log('call |', 'Oi, Bem-vindo ' + nome)
}
darOi.call({}, 'Brian')

function descricaoCarro(arg) {
  console.log(' ')
  console.log('call | this', this)
  console.log('call |', `${this.marca} ${this.ano} ${arg}`)
}

descricaoCarro()
descricaoCarro.call({marca: 'honda', ano: '2014'}, 'argumento')

const carros = ['ford', 'fiat', 'chevrolet']
const frutas = ['banana', 'maçã', 'uva']

// alterou o forEach para percorrer frutas
carros.forEach.call(frutas, (item) => {
  console.log('forEach.call', item)
})

function Dom(element) {
  this.element = document.querySelector(element);
}

Dom.prototype.ativo = function() {
  console.log('call', this.element)
  this.element.classList.add('ativo')
}
const ul = new Dom('ul')
ul.ativo()

const li = {
  element: document.querySelector('li')
}
Dom.prototype.ativo.call(li)


console.log('********')


const numeros = [1, 2, 3, 4]
console.log('apply', Math.max.apply(null, numeros))


console.log('********')


const $ = document.querySelector.bind(document);
console.log('bind', $('li'))

const pokemon = {
  pokemon: '',
  atacar(outroPokemon, tipo) {
    console.log('bind', `${this.pokemon} atacou ${outroPokemon} do tipo ${tipo}`)
  }
}

const torterra = {
  pokemon: 'Torterra'
}

const batalha = pokemon.atacar.bind(torterra)
batalha('Empoleon', 'água')
batalha('Moltres', 'fogo')