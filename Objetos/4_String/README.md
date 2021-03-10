## Anotações sobre String

É uma função que assim como seu nome, constrói uma string e retorna um objeto.

- Diferente de iniciar uma string com `''` que retorna apenas uma string normal. O retorno desse construtor retorna o objeto com o valor e cada caracter em uma posição de array.

- ambas as formas podem acessar os métodos e propriedades da string

- [métodos e propriedades da String listados na MDN](https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Global_Objects/String) 

- anotções pessoais: 
  - `string.concat(' stringASerConcatenado')`: concatena o argumento com a string que chamou a função.
    - pode ser passado mais de um argumento para a concatenação.
  
  - `string.includes('valorQueDeseja')`: ele verifica `'valorQueDeseja'` se existe na string que chamou a função.

  - `.substring` x `.slice`: ambos servem para recortar uma parte da string e possuem argumentos de inicio e final. Uma diferença seria:
    - substring não aceita argumentos negativos caso receba, retorna a string completa

  - `.padStart(5, '.')` e `.padEnd(5, '.')`: no primeiro arg possui o tamanho que deseja na string, 
    - caso a string não tenha esse tamanho, ele vai preencher com o segundo arg para ter o tamanho especificado. 
    - caso não tenha o segundo arg, ele preenche com espaços vazios
  
  - `.replace`: o primeiro arg aceita string ou regular expressions
    - com string, ocorre apenas na primeira ocorrência, caso utilize regex pode ocorrer em várias ocorrências.
  
  - `.split`: cria uma array, e junto com o método de `Array.join()` pode fazer combinações.