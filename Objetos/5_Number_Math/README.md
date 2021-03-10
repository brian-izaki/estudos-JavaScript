## Anotações sobre [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
O objeto `Number` possui métodos estáticos nele e só podem ser vistos nele sem ter sido instanciado.

- Para que possa acessar métodos e propriedades específicas do objeto, é necessário apenas chamaar o objeto `Number` sem instanciar ele. 
  - ex:
    ```JavaScript
    Number.isNaN()
    ```

- Number pode ser um numero inteiro, decimal

- [Métodos e propriedades do Number](https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Number)

- anotações pessoais: 
  - Number:
    - `.parseFloat('56')` ou `.parseInt('56')`: transforma uma string em numero decimal (float) e em inteiro(int)
      - caso haja uma letra no início, ou ',' na string é retornado NaN.
      - melhor ser usado quando não souber ao certo o que tem na string.
  - Number.prototype:
    - `.toFixed()`: retorna uma string e arredonda valores que estajam em decimal.
---

## Anotações [Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
O objeto `Math` não tem prototype. Apenas métodos e propriedades matemáticas.

- anotações pessoais: 
  - `.abs(-4)`: valores absolutos, pegará o numero passado e mesmo que seja negativo irá retornar ele em positivo

  - `.ceil(5.6)`: força um arrendondamento para **cima** mesmo que o valor seja `5.6` (tradução de ceil é teto)

  - `.floor(5.4)`: força o areendondamento para **baixo** mesmo que o valor seja `5.4` (tradução de floor é piso)

  - `.random()`: retorna um valor em decimal que fica entre 0 e 1. 
    - para obter numeros inteiros aleatórios basta multiplicar o valor do `.random()` com o maior numero que deseja. Caso não queira os decimais basta utilizar o `round()` para um arredondamento justo.