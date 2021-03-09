/**
  const carro = {
    marca: 'marca',
    preco: 0,
  }
  // honda está referenciando carro, não é uma cópia independente
  // pois, toda alteração em honda irá refletir no carro
  const honda = carro;
  honda.marca = 'honda'
  honda.preco = 2000
 */

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('honda', 2000);


function Carro2(marcaAtribuida, precoAtribuido) {
  const taxa = 1.2;
  const precoFinal = precoAtribuido * taxa;
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
  console.log('Dentro do objeto', this)
}

const fiat = new Carro2('fiat', 1000)

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativo')
//   }
// }
// Dom.seletor = 'ul';
// Dom.ativar()

function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor)
  }
  this.ativar = () => {
    this.element().classList.add('ativar')
  }
}

const li = new Dom('li')
const ul = new Dom('ul')

console.log(li)
console.log(ul)
