console.log('*********')
console.log('*********')
console.log('arquivo loops.js')

// for loop
for (let numero = 0; numero < 4; numero++) {
  console.log('for: ', numero);
}

console.log('*********')
// while loop
let indice = 0;

while(indice < 4) {
  console.log('while: ', indice)
  indice ++;
}

console.log('****')

let indice2 = 0;

do {
  console.log('do...while ...', indice2)
  indice2++
} while(indice2 < 5)

// ------------------------------

console.log('*********')
console.log('loop em array')

const games = ['pokemon', 'lol', 'clash royale']

for(let item = 0; item < games.length; item++) {
  console.log('será parado em lol ...', games[item])
  
  if(games[item] === 'lol') {
    // quebra o loop
    break;
  }
}


// --------

console.log('*********')
console.log('forEach()')

const frutas = ['banana', 'uva', 'pera', 'mamão']
frutas.forEach((value, indice, meuArr) => {
  console.log(indice, value, meuArr)
})