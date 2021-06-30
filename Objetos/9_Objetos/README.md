## Anotações sobre [Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)

Todo objeto possui o construtor de Object.

- Métodos e propriedades no [prototype](https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Object)
  - Métodos do protótipo: 
    - `objeto.isPrototypeOf(obj)`: verifica se o `obj` é protótipo de `objeto`

- Métodos:

  - `.create(objeto)`: ele cria um novo objeto baseado no argumento `objeto` passado. Com o novo objeto, as **proprieades e métodos** do `objeto` passado, **passam a ficar no `prototype` dele** e não diretamente.

    - Não modifica o objeto.

  - `.assign(alvo, obj...)`: pega o objeto `alvo` e adiciona as proprieades e métodos que os `obj` que são passados possuem.

    - **Modifica meu objeto `alvo`**.
    - Seria como extender o `alvo`.

  - `.defineProperties()` e `.definePropertie()`: Define propriedades **imutáveis**, ou seja, propriedades que não poderão ser alteradas (pode ser customizado) ou deletadas.

    - Modifica o objeto.

    - Quando for passar um atributo, pode escolher as opções de escrita, enumeravel, etc para ele:
      ```JavaScript
      Object.defineProperties(obj, {
        atributo: {
          // value: 'valor',
          configurable: false,
          writable: false,
          enumerable: false,
          get(){ 
            return this._atributo
          },
          set(valor){
            this._atributo = valor + 1
          }
        }
      })
      ```
      - Por padrão os valores são `false`
      - `value`: define o valor do atributo mas, quando é definido o `get` e `set`, ele não pode ser definido.
      - `configurable`: permite alteração
      - `writable`: permitir escrita
      - `enumerable`: permitir que esse valor possa ser capturado quando houver iteração sobre ele.
      - `get()`: é executado qnd o atributo for chamado no código, ex: `obj.atrivuto`
      - `set(valor)`: executa sempre que o atributo for alterado.
      - O `this._atributo` é o valor do atributo.
  
  - `.getOwnPropertyDescriptors(objeto)`: traz a descrição (configurable, writable, etc) dos métodos e propriedados do **objeto atual**.

  - `.keys(obj)`: apenas retorna as chaves que tem `enumerable: true`.

  - `.entries(obj)`: retorna um array com arrays que possuem a chave-valor do objeto (`[[ 'atributo', 'valor' ]]`)

  - `.is(obj1, obj2)`: verifica se os **objetos possuem referência ao mesmo objeto** e não se os valores dos objetos são iguais.

  - `.freeze()`: impede **alteração, adição e delete** de propriedades.

  - `.seal()`: impede **adição e delete** de propriedades mas, permite **alterar**.

  - `.preventExtensions()`: impede **adição** de propriedades mas, **permite deletar e alterar**.
  
  - `.values(objeto)`: cria um array com os valores dentro do objeto, as chaves desaparecem.
