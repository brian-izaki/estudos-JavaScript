## Anotações sobre function expression

As funções que foram utilizadas até o momento eram functions declaration ( `function nome(){}` ). Function expression é declarada uma função anônima que é atribuida para uma variável.
  ```JavaScript
  const somar = function (a, b) {
    return a + b
  }
  ```

- **Declaration(1) vs Expression(2)**:
  - **Momento de hoisting**
    - 1: função é carregada com seu bloco de código junto (caso a função seja executada antes dela ser declarada, irá funcionar)
    - 2: função só terá seu conteúdo quando chegar na linha que for atribuída a ela a função anônima.
  
- **Immediatly Invoked Function Expression (IIFE)**
  - Para isolar escopo de uma função (agora existem os módulos)
  - A função é declarada e executada no mesmo momento.
  - antes de criar, deve conferir se a linha anterior possui `;`, pois o compilador pode confundir pensando que é uma função.
