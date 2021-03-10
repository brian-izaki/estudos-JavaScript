console.log('NUMBER')

const ano = 2000;
const preco = new Number(99)

console.log('Number sem instanciar', Object.getOwnPropertyNames(Number))
console.log('Number instanciado', Object.getOwnPropertyNames(Number.prototype))

// NaN = Not a Number
console.log('isNaN', Number.isNaN(NaN))
console.log('isNaN', Number.isNaN(2))
console.log('isNaN', Number.isNaN('ola'))

console.log('isInteger', Number.isInteger(20))
console.log('isInteger', Number.isInteger(20.3))


console.log('parseFloat', Number.parseFloat('5.9'))
console.log('parseInt', Number.parseInt('5.9'))


const preco2 = 2.44;
console.log('toFixed', preco2.toFixed())
console.log('toFixed', preco2.toFixed(2))


console.log('toString', preco2.toString())


const valor = 33.34;
let valorLocale = valor.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
console.log('toLocaleString', valorLocale)


console.log('/*******/')
console.log('\\*******\\')