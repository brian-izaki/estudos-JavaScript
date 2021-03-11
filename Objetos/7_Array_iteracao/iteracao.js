const carros = ['Ford', 'Honda', 'Fiat']
carros.forEach((item, index, array) => {
  // array[index] = 'teste'
  console.log('forEach', item, index, array)
})


console.log('***********')


const pokemons = ['pikachu', 'lilipup', 'pidgey']
const novoPokemons = pokemons.map((item, index, array) => {
  console.log('map', item, index, array)
  return item + ' capturado'
})
console.log(novoPokemons)


console.log('****PERFORMANCE .map x .forEach****')
const forEachNumeros = [1, 2, 3, 4, 5, 6]
const mapNumeros = [1, 2, 3, 4, 5, 6]

console.time('forEach')
forEachNumeros.forEach((item, indice, array) => {
  console.log(item, indice, array)
  array[indice] = item * 2;
})
console.log('resultado', forEachNumeros)
console.timeEnd('forEach')

console.time('map')
const mapCopia = mapNumeros.map((item, indice, array) => {
  console.log(item, indice, array)
  return item * 2;
})
console.log('resultado', mapCopia)
console.timeEnd('map')


console.log('***********')


const aulas = [10, 20, 15]
const valorInicial = 0;

const reduceAulas = aulas.reduce((acumulador, item, index) => {
  console.log('reduce', acumulador, item, `indice:${index}`)
  return 
})
console.log(reduceAulas)

const reduceAulasSoma = aulas.reduce((acumulador, item, index) => {
  console.log('reduce soma: ', acumulador, item, `indice:${index}`)
  return acumulador + item 
}, valorInicial)
console.log(reduceAulasSoma)


console.log('***********')


const frutas = ['banana', 'uva', 'pera']
console.log('reduceRight', frutas.reduceRight((acumulador, item) => acumulador + ' ' + item)) 


console.log('***********')


const temUva = frutas.some((fruta) => {
  return fruta === 'uva'
})
console.log('some', temUva)


console.log('***********')


const every = frutas.every((fruta) => {
  return typeof fruta === 'string'
})
console.log('every', every)


console.log('***********')


const buscaIndex = frutas.findIndex((fruta, index) => {
  return fruta === 'pera'
})
console.log('findIndex', buscaIndex)

const numeros = [12, 11, 312, 433, 3]
const busca = numeros.find((numero, index) => {
  return numero > 200
})
console.log('find', busca)


console.log('***********')


const animes = ['one piece', 'boku no hero', 'gintama', 'sao']
const animesComO = animes.filter( anime => {
  return anime.includes('o')
})
console.log(animesComO)