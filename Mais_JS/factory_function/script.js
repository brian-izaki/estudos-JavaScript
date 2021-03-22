'use strict'

function createButton(text) {
  const numeroSecreto = '1234'

  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }

  return {
    element,
    text,
  }
}
const btnComprar = createButton('Comprar')
console.log('factory function', btnComprar)

const btnVender = createButton('Vender')
btnVender.element = 'tentando alterar'
console.log('factory function atributo alterado', btnVender)



console.log('*********')



function createLabel(text) {
  function element() {
    const buttonElement = document.createElement('label');
    buttonElement.innerText = text;
    return buttonElement;
  }
  
  return Object.freeze({
    element,
    text,
  })
}

const lblPreco = createLabel('Preco')
try{
  lblPreco.element = 'tentando alterar'
} catch(error) {
  console.log(error)
}
console.log('ice factory', lblPreco)



console.log('*********')



function Pessoa(nome) {
  if(this instanceof Pessoa) 
    console.log('true ... instância de pessoa')
  else {
    console.log('false ... retorna uma new Pessoa')  
    return new Pessoa(nome)
  }

  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou'
}

const programador = Pessoa('brian');

console.log(programador)