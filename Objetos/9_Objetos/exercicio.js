// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(tipo){
  return Object.prototype.toString.call(tipo)
}

console.log(verificaTipo(['a', 'b']))
console.log(verificaTipo(1))
console.log(verificaTipo(''))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  }
})
quadrado.area = 32
quadrado.lados = 32
delete quadrado.lados

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)

configuracao.background = '234'
delete configuracao.width;
console.log(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))