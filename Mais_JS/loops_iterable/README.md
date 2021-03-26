## Anotações [Iterable](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators)

<blockquote">
  Um objeto é um iterator (iterador) quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência.
</blockquote>
<cite>MDN</cite>

- no protótipo do objeto ele terá `Symbol.iterator` para dizer que é um objeto iterável.
  - Array, String, etc são objetos que são iteráveis.

- Vantagens de saber que o objeto é iterável:
  
  - utilizar o loop `for ... of`
    ```JavaScript
    for (const item of objetoIteravel) {
      console.log(item)
    }
    ```
    - faz um loop por cada item do `objetoIterável`.
    - a constante `item` é o valor do item que está no momento do loop.

  - O **spread operator** funciona apenas em objetos iteráveis.

- Caso queira percorrer um objeto como no `for ... of`, porém o **objeto não é iterável** pode ser utilizado o `for ... in`.
  ```
  
  ```
  - o objeto precisa ter propriedades enumeráveis.


- [estudos feitos sobre Array](../../Objetos/7_Array_iteracao)