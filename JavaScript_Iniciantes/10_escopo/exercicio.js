// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);

// no console está sendo passado a palavra reservada var para ser mostrado no console, sendo que não está sendo definida nenhuma variavel. e é necessário mover o console para dentro do bloco.

// Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

// movendo o "const dois = 2" para fora do escopo da função

// O que fazer para total retornar 500?
// var numero = 50;
// for(var numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }
// const total = 10 * numero;
// console.log(total);

// alterar o "var" do for para let