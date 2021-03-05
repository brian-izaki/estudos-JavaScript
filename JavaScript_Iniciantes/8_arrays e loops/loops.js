console.log('---------')
console.log('arquivo loops.js')

// for loop
for (let numero = 0; numero < 4; numero++) {
  console.log('for: ', numero);
}

// while loop
let indice = 0;

while(indice < 4) {
  console.log('while: ', indice)
  indice ++;
}

// ------------------------------

console.log('loop com array')

const games = ['pokemon', 'lol', 'clash royale']

for(let item = 0; item < games.length; item++) {
  console.log(games[item])

  if(games[item] === 'lol') {
    // quebra o loop
    break;
  }
}


// --------
console.log('---')
console.log('forEach()')

const frutas = ['banana', 'uva', 'pera', 'mamão']
frutas.forEach((value, indice, meuArr) => {
  console.log(indice, value, meuArr)
})