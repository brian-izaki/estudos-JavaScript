## Anotações sobre [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function)

- Quando é criado uma `function`, ele cria um objeto global chamado `Function`.
  ```JavaScript
  function soma(){
    return 1 + 1
  }

  // pode ser criado uma função com new também
  const minhaSoma = new Function('soma', 'return 1 + 1')
  ```

- Para pegar os métodos e propriedades de uma função, é necessário não inicializar ela. ex:
  ```JavaScript
  function multiplica(n1, n2) {
    return n1 * n2;
  }
  multiplica(2, 2) // 4
  multiplica.length //
  ```

- funções como **.map, .forEach, etc. Podem utilizar** os métodos e propriedades de função também.

- propriedades:
  - `.length`: retorna a quantidade de parâmetros.
  
  - `.name`: retorna o nome da função em string.

- métodos: 
  - `.call(this, arg...)`: Simplesmente executa a função quando chamada.
    - `this` representa o escopo a qual a função irá pertencer.
      - caso uma função seja executada globalmente, o `this` será o `window` {em browsers) pois, a função estará dentro deste objeto.
      - É **possível alterar** esse `this` mesmo que a função esteja armazenada em outro objeto, para isto é necessário o `.call` e colocar quem será o escopo dessa função onde está o **parâmetro `this`**
    - `arg` representa os argumentos que serão passados para a função (caso hajam parametros nela), a ordem dos argumentos seguem a ordem dos parâmetros.
  
  - `.apply(this, [arg...])`: funciona igual ao `.call` a diferença é que os argumentos precisam estar dentro de uma array.

  - `.bind(this, args...)`: funciona igual ao `.call` a diferença é que ele não ativa a função no momento que é chamado, ele apenas será executado quando for chamado pela segunda vez.
    ```JavaScript
    // não executa a função
    const minhaSoma = soma.bind(this, arg)

    // agora executa a função
    minhaSoma()
    ```
    - a função pode ser reutilizada novamente. Diferente dos outros que só podem ser utilizados uma vez.

- Os métodos de array podem ser utilizados para manipular "arrays like" permitindo que elas possam ter métodos de array normal, sem ter a necessidade de converter para uma array antes.
  ```JavaScript
  Array.prototype.map.call(arrayLike, callback)
  ```

- O arumento `this` dos métodos, podem ser passados com valor `null` caso a função desejada não utilize o objeto principal (alguma propriedade que será utilizada dentro da função e esteja armazenada no objeto).
