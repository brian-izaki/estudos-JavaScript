// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `Nome completo: ${this.nome} ${this.sobrenome}`
}

const brian = new Pessoa('brian', 'izaki', 21)
console.log(brian.nomeCompleto())
console.log(Object.getOwnPropertyNames(brian))
console.log(Object.getOwnPropertyNames(Pessoa.prototype))

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log ('=====')
console.log('node list', Object.getOwnPropertyNames(NodeList.prototype))
console.log('html collection', Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log('Document', Object.getOwnPropertyNames(Document.prototype))


// Liste os construtores dos dados abaixo
console.log('-----------')
const li = document.querySelector('li');

console.log(li.constructor)
console.log(li.click.constructor)
console.log(li.innerText.constructor)
console.log(li.value.constructor)
console.log(li.hidden.constructor)
console.log(li.offsetLeft.constructor)
// o click sendo executado retorna undefined
// console.log(li.click().constructor.name) 

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name); // string
