var isPerson1 = true;
var isPerson2 = false;

if (isPerson1) {
  console.log('pessoa 1');
} else{
  console.log('pessoa 2')
}

// encadeamento de if

if (isPerson1){
  console.log('é a pessoa 1')
} else if (isPerson2){
  console.log('é a pessoa 2')
} else{
  console.log('Não é nenhuma pessoa')
}

// uso do Switch

var bebida = 'café'

switch (bebida) {
  case 'agua':
    console.log('aqui a água')
    break;

  case 'café':
    console.log('aqui o café')
    break;

  default:
    console.log('não tem nenhuma bebida')
    break;
}

// refatorando o Switch e mais de um if else 
// object literals
var bebidas = {
  'agua': () => {console.log('aqui a água')}, 
  'cafe': () => {console.log('aqui o café')}, 
  'default': () => {console.log('não tem nenhuma bebida')}
}

bebida['cafe']

// operadores de comparação
var 
  igualEstrito = '1' === 1,
  igualNaoEstrito = '1' == 1,
  diferenteEstrito = '1' !== 1,
  diferenteNaoEstrito = '1' != 1,
  maiorQue = 2 > 1,
  maiorIgualQue = 2 >= 2,
  menorQue = 9 < 10,
  menorIgualQue = 20 >= 20;

console.log(igualEstrito)


// operador de negação (not)
var 
  hasCar = true,
  hasHouse = false

var 
  canDrive = 12 > 18 && hasCar,
  canClearAnything = hasCar || hasHouse
  notIsTrue = !true,

console.log(canDrive)







