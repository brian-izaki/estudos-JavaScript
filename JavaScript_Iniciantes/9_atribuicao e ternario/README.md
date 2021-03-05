## Anotações sobre operadores de atribuição

- operador de atribuição é uma forma de diminuir a repetição no código. ao invés de fazer `numero = numero + 1` poderia fazer `numero += 1`. Abaixo é mostrado com outros operadores:
  ```JavaScript
  var x = 3;
  var y = 2;
  x += y; // x = x + y (5)
  x -= y; // x = x - y (1)
  x *= y; // x = x * y (6)
  x /= y; // x = x / y (1.5)
  x %= y; // x = x % y (1)
  x **= y; // x = x ** y (9)
  ```

## Operador Ternário

- é uma forma reduzida da condicional `if` e `else`
  ```JavaScript
  let pokemon = 'bulbassauro'
  let pokemon2 = 'pikachu'

  let isBulbassauro = pokemon === 'bulbassauro' ? 'é o bulbassauro!' : 'nossa, não é o bulbassauro'
  ```