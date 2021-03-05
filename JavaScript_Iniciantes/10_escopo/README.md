## Anotações sobre escopos
- um escopo depende do local que o código está, ex: uma variavel definida normalmente é visível por todos no código, porém caso uma variável seja definida dentro de um bloco, ela é visível apenas dentro daquele bloco.
  ```JavaScript
  // a função chamaConsole pode pegar o valor de todosVeem
  const todosVeem = 'ajudo todo mundo';
  
  function chamaConsole() {
    // soAquiMeVe é apenas visto dentro da função chamaConsole
    const soAquiMeVe = 'só ajudo o ChamaConsole'
  }
  ```
- um bloco é tudo dentro de chaves `{}` definadas após o if, for, function, etc.

- no momento de definir uma variável é possível utilizar `var` ou `const` ou `let`;
  - `var` define variáveis de forma global, acabam vazando do bloco (não é o mais recomendado);
  - `const` define uma variaável que é constante, ou seja, que não pode alterar o valor definido nele, mas caso seja um objeto pode alterar os atributos dentro, se for array ainda pode adicionar e retirar os indices.
  - `let` define uma variável que pode ter seu valor alterado depois de definido.


- **hoisting**: no momento de execução, todas as variáveis definidas vão para cima do código, os valores apenas serão definidos nas variáveis quando chegar na linha que está sendo feita a atribuição do valor.