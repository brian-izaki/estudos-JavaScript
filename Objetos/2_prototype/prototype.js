function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

// não funciona com arrow functions
Pessoa.prototype.andar = function () {
  return this.nome + ' pessoa andou'
}


const brian = new Pessoa('brian', 21)
 
console.log('prototype de função',Pessoa.prototype)
console.log('', brian.andar())


const objeto = {
  nome: 'brian', 
  idade: 21
}
console.log('prototype de objeto instanciado', objeto.prototype)

const pais = 'Brasil'
const cidade = new String('Rio')

console.log('prototype da função String', String.prototype)

const listaLi = document.querySelectorAll('li')
console.log(listaLi)

const listArray = Array.prototype.slice.call(listaLi)
console.log(listArray)


console.log('----------')

console.log('Array', Object.getOwnPropertyNames(Array))
console.log('prototype do Array', Object.getOwnPropertyNames(Array.prototype))
console.log('instanciação de Pessoa', Object.getOwnPropertyNames(brian))


console.log('descobrindo quem é o construtor: ', brian.constructor.name)

