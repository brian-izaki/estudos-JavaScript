const comida = 'pizza '

const agua = new String('agua')

console.log('length', comida.length)
console.log('length', agua.length)

console.log('------------')

console.log('pegando posição com [0]', comida[0])
console.log('pegando posição com [0]', agua[0])

console.log('------------')

console.log('charAt(0)', agua.charAt(0))

console.log('------------')

const fraseFinal = comida.concat(agua)
console.log('concat', fraseFinal)

console.log('------------')

const fruta = 'banana'
const listaFrutas = 'mamão banana maçã'
console.log('includes', listaFrutas.includes(fruta))
console.log('includes', listaFrutas.includes(fruta, 10))

console.log('------------')

console.log('startsWith', fruta.startsWith('ban'))
console.log('endsWith', fruta.endsWith('ban'))

console.log('------------')

const transacao1 = 'Depósito do cliente'
console.log('slice', transacao1.slice(1, 5)) 
console.log('slice', transacao1.slice(5)) 
console.log('slice', transacao1.slice(-3)) 

console.log('------------')

const linguagem = 'JavaScript'
console.log('substring', linguagem.substring(3, 5))
console.log('substring', linguagem.substring(5))
console.log('substring', linguagem.substring(-1))

console.log('------------')

const instrumento = 'violino'
console.log('indexOf', instrumento.indexOf('li'))
console.log('indexOf', instrumento.indexOf('o'))
console.log('lastIndexOf', instrumento.lastIndexOf('li'))
console.log('lastIndexOf', instrumento.lastIndexOf('o'))

console.log('------------')

const preco = 'R$ 99,00'
console.log('padStart', preco.padStart(10, '.'))
console.log('padEnd', preco.padEnd(10, '.'))

console.log('------------')

const frase = 'okay '
console.log('repeat', frase.repeat(3))

console.log('------------')

const listaItens = 'camisa roupa calça vestido'
console.log('replace', listaItens.replace(' ', ', '))
console.log('replace regex', listaItens.replace(/[ ]+/g, ', '))

console.log('------------')

const listaProdutos = 'relógio camera celular fone'
console.log('split', listaProdutos.split(' '))
console.log('split', listaProdutos.split('camera'))

console.log('------------')

const camelCase = 'olaMundoTeste'
console.log('toUpperCase', camelCase.toUpperCase())
console.log('toLowerCase', camelCase.toLowerCase())

console.log('------------')

const comEspacos = '  ola  '
console.log(`variavel |${comEspacos}|`)
console.log(`trim |${comEspacos.trim()}|`)
console.log(`trimStart |${comEspacos.trimStart()}|`)
console.log(`trimEnd |${comEspacos.trimEnd()}|`)
