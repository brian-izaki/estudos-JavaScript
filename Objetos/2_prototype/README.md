## Anotações sobre prototype

- **Prototype está sempre ligado a uma função**. Um objeto não possui a propriedade `.prototype`

- Ela é uma propriedade da função que retorna um objeto.
  ```JavaScript
  function soma (n1, n2) {
    return n1 + n2
  }

  soma.prototype;
  ```

- No prototype, pode ser adicionado novas propriedades e métodos como se fosse um objeto comum. 
  - A diferença é que, elas não estarão diretamente na função construtora, elas estarão na propriedade `__proto__` da função. 

  - Para acessar essas propriedades e métodos é a mesma coisa que as outras definidas sem o `.prototype`

  - obs: no momento de definir um método com prototype para uma função construtura, não é possível ser uma arrow function, é necessário utilizar o formato mais verboso.
    ```JavaScript
    // retorna undefined
    Pessoa.prototype.andar = () => {
      return this.nome
    } 

    // retona o nome que vai ter no objeto instanciado
    Pessoa.prototype.nadar = function () {
      return this.nome
    } 

    ```

- Um método ou propriedade definida no **protótipo é buscada em segundo lugar**, em primeiro é visto dentro da própria função construtora, caso não haja em nenhum dos dois, ocorre um erro.

- **Herança de protótipo**
  - `__proto__`: é algo interno do browser. Ele faz uma cadeia de protótipo que por sua vez possui métodos e propriedades nativas pois podem ser Objetos, String, Number, etc. Ele aparece apenas para objetos já criados.

- Construtores Nativos:
  - Os tipos no JS, todos posuem um construtor para ele, objetos, Funções, String, Arrays, etc. (eles são funções)

- Verificar propriedades de um objeto: 
  - `Object.getHasOwnPropertyNames(ObjetoInstanciado)`: retorna um array com os nomes de propriedades e métodos que ficam diretamente ligado ao objeto **(não retorna os que tem no prototype)**

- Verificar o tipo do construtor pode ser utilizado o `.constructor.name`