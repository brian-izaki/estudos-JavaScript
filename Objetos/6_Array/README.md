## Anotações sobre [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
O objeto `Array` armazena uma lista de dados, podendo ser outros objetos, numeros, strings, booleanos, etc. <br />
O construtor de array possui métodos e propriedades que não podem ser acessadas pelo prototype.

- É possível armazenar vários tipos de dados em uma array, porém, isso **afeta o desempenho** do código. O ideal é utilizar apenas um tipo de dado dentro dela.

- Pode ser adicionado itens dentro do array que pulem indices que não existem (os indíces que não existiam antes serão valores vazios), porém isso **irá impactar na performance** no momento da interação com a array (forEach, map, etc)
  - ex: 
    ```JavaScript
    const lista = [1, 2, 3, 4]

    lista[20] = 20
    ```

- [Métodos e propriedades do Array](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype).

- Anotações pessoais:
  - `Array(5)` e `Array.of(5)`: Quando passado como arg um numero, é criado uma array, a diferença estre os dois é como essa array será criada, no `Array` será criado uma com 5 espaços vazios, enquanto que com o `.of` será criado apenas com o número 5.

  - [Métodos modificadores](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype#mutator_methods), ou seja, **alteram** os valores dentro da array.
    - `.sort()`: ele ordena os valore, caso seja string ordena por ordem alfabética, caso seja number ordena de acordo com o caracter,ou seja, caso tenha `1, 2, 11` a ordem será `1, 11, 2`

    - `.unshift(item)` e `.push(item)`: ambos **adicionam** valores dentro do array e retornam o novo `length` da array modificada, com diferença que `.unshift` **adiciona no início** do array e o `.push` **adiciona ao final**.

    - `.shift()` e `.pop()`: ambos **retiram** valores da array e retornam esse valor, com diferença que o `.shift` **retira do início** da array e o `.pop` **retira do final**.

    - `.splice(indiceInicio, qtdRemover, ...valoresAdicionar)`: retorna apenas os valores que forem retirados.
      - `indiceInicio`: Adiciona itens nos locais especificados dentro da array;
      - `qtdRemover`: remove uma quatidade determinada de itens a partir do `indiceInicio` especificado;
      - `...valoresAdicionar`: Novos valores que serão adicionados são especificados a partir do 3º argumento em diante (pode ser adicionado mais de um valor)

    - `.copyWithin(alvo, inicio [, fim] )`: (todos os arg sáo índeces da array) a partir do `alvo` ele realiza as alterações e do `inicio` ele copia os valores, o `fim` é opcional e determina onde essa copia deve parar.
  
  - [Métodos de acesso](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype#accessor_methods), ou seja, **não alteram** a array.
    - `.indexOf(valor)` e `.lastIndexOf(valor)`: retornam o índice da primeira correspondencia de `valor`. Caso não tenha correspondencia ele retoran `-1`