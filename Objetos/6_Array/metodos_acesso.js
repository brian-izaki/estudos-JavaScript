console.log('MÉTODOS DE ACESSO')

const transporte = ['barco', 'carro']
const transporte2 = ['moto', 'avião']

console.log('concat', transporte.concat(transporte2))

console.log('****************') 

const linguagens = ['js', 'python', 'js', 'php', 'java']
console.log('includes', linguagens.includes('php'))
console.log('indexOf', linguagens.indexOf('js'))
console.log('lastIndexOf', linguagens.lastIndexOf('js'))

console.log('****************') 

console.log('join', linguagens.join(' ... '))

console.log('****************') 

console.log('slice', linguagens.slice(1, 3))