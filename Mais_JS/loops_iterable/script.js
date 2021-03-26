const lista = ['pokemon', 'digimon']
const palavra = 'Ola mundo'

console.log(lista)

for(const jogo of lista) {
  console.log('of de array ...', jogo)
}

const btns = document.querySelectorAll('button')
console.log(btns)
for(const btn of btns) {
  console.log('of de NodeList ...',btn)
}

console.log('*****')

const carro = {
  marca: 'Honda',
  cor: 'branco',
}

try {
  for(const key of carro) {
    console.log('in de objeto ...', key)
  }
} catch (error) {
  console.log('erro utilizando of em um objeto', error)
}

for(const key in carro) {
  console.log('in de objeto ...', key)
}

for(const key in lista) {
  console.log('in de um array ...', key)
}
