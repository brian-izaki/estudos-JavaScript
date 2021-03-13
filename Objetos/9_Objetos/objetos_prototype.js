console.log('******')

console.log('prototype de object')

const saladaDeFruta = ['banana', 'maçã', 'mamão', 'laranja']

console.log('hasOwnProperty', saladaDeFruta.hasOwnProperty('map'))
console.log('hasOwnProperty', Array.prototype.hasOwnProperty('map'))

console.log('propertyIsEnumerable', Array.prototype.propertyIsEnumerable('map'))

console.log('propertyIsEnumerable', window.propertyIsEnumerable('innerHeight'))


console.log('isPrototypeOf', Array.prototype.isPrototypeOf(saladaDeFruta))


const somar = function(a, b) {
  return a + b
}
const obj = {
  teste: 'teste'
}

console.log('toString', saladaDeFruta.toString())
console.log('toString', somar.toString())
console.log('toString', obj.toString())


console.log('*******')


console.log('verificar o tipo do objeto global', Object.prototype.toString.call(saladaDeFruta))
console.log('verificar o tipo do objeto global', Object.prototype.toString.call(somar))