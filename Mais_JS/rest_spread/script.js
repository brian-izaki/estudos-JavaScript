function soma(n1, n2 = 0) {
  console.log('arguments', arguments) 
  return n1 + n2
}

console.log('parametro default', soma(10))



console.log('********' )



function listaNumeros(valor1, ...numeros) {
  const vezesValor1 = numeros.map(item => {
    return item * valor1
  })
  return vezesValor1;
}

console.log('parametro rest', listaNumeros(2, 5, 6, 2))


const listaIdade = [32, 55, 23, 12, 16, 63];
const maiorIdade = Math.max(...listaIdade)

console.log('maior numero da lista de idades', maiorIdade)