// TIPO String
var nome = 'brian';

// propriedade para ver tamanho
console.log(nome.length)
/* método para pegar um caracter (cada caracter vira um índice)
 indice de b r i a n
           0 1 2 3 4
*/
console.log(nome.charAt(2))


// TIPO Number
var altura = 1.76
// transforma em String
console.log(altura.toString())
// aproxima do inteiro mais proximo
console.log(altura.toFixed())


// Funções 
function teste(v1){
  return 'teste'
}

console.log(teste.prototype)


// elementos do DOM
var button = document.querySelector('.btn');
console.log(button)