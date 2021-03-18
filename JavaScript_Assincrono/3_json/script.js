const pokemon = '{"tipo": "fogo", "nome": "chinchar"}'
const textToObj = JSON.parse(pokemon);
console.log('texto', pokemon)
console.log('JSON parse', textToObj)


const objeto = {
  nome: 'brian',
  idade: 21
}
const objToText = JSON.stringify(objeto)

console.log('objeto', objeto)
console.log('JSON stringify', objToText)
