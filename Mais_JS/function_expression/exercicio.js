// Remova o erro
priceNumber('R$ 99,99');
function priceNumber(n) { 
  return +n.replace('R$', '').replace(',', '.')
};

console.log(priceNumber('R$ 99,99'));
// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  function fazComida() {
    return 'fazendo comida'
  }
  
  console.log(fazComida())
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active(() => {
  console.log('usei a função')
})