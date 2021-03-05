// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const eu = {
  nome: 'Brian',
  sobrenome: 'izaki',
  idade: 20
}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
console.log(eu.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  raca: 'labrador',
  pelos: 'preto',
  idade: 10,
  seeMan(){
    return 'latir'
  } 
}

console.log(dog.seeMan())
