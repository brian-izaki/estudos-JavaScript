const instrumentos = ['guitarra', 'baixo', 'violino']
const precos = [49, 59, 69, 73];
const dados = [new String('tipo 1'), ['Carro', 'portas'], {cor: 'azul', preco: 2000}]

console.log('pegando indice', instrumentos[1])
console.log('pegando indice', precos[3])
console.log('pegando indice', dados[1][0])


const carros1 = new Array('Corola', 'Mustang', 'HOnda');
console.log('indice do new Array', carros1[0])
carros1[0] = 'Ferrari'
carros1[5] = 'espaços vazios antes'
console.log('array com indices alterados', carros1)


const li = document.querySelectorAll('li')
console.log('array like', li)

const arrayLi = Array.from(li)
console.log('array from', arrayLi)


console.log('isArray', Array.isArray(li))
console.log('isArray', Array.isArray(arrayLi))


console.log('of', Array.of(5))
console.log('array', Array(5))


const frutas = ['banana', 'pera', ['uva', 'uva verde']]
console.log('length', frutas)


console.log('//****///')
console.log('//****///') 