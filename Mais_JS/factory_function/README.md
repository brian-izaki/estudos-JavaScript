## Anotações sobre Factory function

Funções que retornam objetos igual ao Class ou constructor functions, com a diferença que não haverá necessidade de utilizar a keyword `new` ao instanciar o novo objeto. 

- Uma _classe_ ou _factory function_ tamém pode fazer com que não precise utilizar o `new`, basta fazer o objeto **retornar um `new` desse mesmo objeto.**

- Vantagens:
  - ela tem um pouco mais de performance;

  - pode ter métodos e propriedades objetos **privados** (que não tem como acessar pelo método)

- **ice Factory**: 
  - retorna um objeto com o freeze, para **não permitir a sobrescrita dos valores** do objeto retornado da Factory.



- `instanceof` ele é utilizido da mesma forma que o`typeof`, mas é utilizado para verificar se a instancia do objeto da esquerda é instância do objeto da direita. 
  ```JavaScript
  const list = new Array();

  list instanceof Array // true
  list instanceof String // false
  ```