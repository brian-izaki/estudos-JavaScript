## Anotações sobre [Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)

Closure é quando existe uma função dentro de uma função.

- a função de dentro vai ter como closure a função de fora.

- essa função de fora pode armazenar os dados que forem processados da função de dentro. 
  - pense na função de fora como uma mochila que será usada pela função de dentro.

- Lembrando que o escopo de uma variavel declarada dentro de um bloco não "vaza" pra fora.

- pensar na utilização do closure, auxilia na criação de variaveis privadas.

## Debugging

- debugging é a maneira de depurar o código e ver o que estã ocorrendo, valores sendo atribuídos a variáveis, execuções, etc.

- Pode ser feito dentro do próprio browser.
  1. Deve acessar o devtools do browser
  2. Ir na **aba source**
  3. Clicar no numero da linha que deseja ver o processo de depuração.
  4. Clicar no botão de recarregar página.
  5. Agora basta clicar nas flechas que aparecem na aba source do devtools.

- Pode ser utilizado ao keyword `debugger` no meio do código, ele irá realizar a mesma ação que seria clicar no numero da aba source no browser.