// Retorne um número aleatório
// entre 1050 e 2000
const numAleatorio = Math.random() * (2000 - 1050 + 1) + 1050;
console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const listaNumero = numeros.split(", ");
console.log(Math.max(...listaNumero));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

let somaTotal = 0;
listaPrecos.forEach((preco) => {
  const precoFormatado = preco
    .toUpperCase()
    .replace("R$", "")
    .replace(",", ".")
    .trim();
  
  const precoConvertido = Number(Number(precoFormatado).toFixed(2));

  somaTotal += precoConvertido;
});

console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))