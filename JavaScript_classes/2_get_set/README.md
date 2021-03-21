## Anotações sobre get e set da Classe

- `get` e `set` podem ser definidos antes dos nomes do método. Ex:
  ```JavaScript
  const objeto = {
    get nomeMetodo(){
      return this._nome;
    },
    set nomeMetodo(valor){
      return this._nome + valor
    }
  }

  // get
  objeto.nomeMetodo;

  //set
  objeto.nomeMetodo = 'alterei';
  ```
  - podem ser utilizados dentro de uma classe também.
  - para um método existe um `set` e um `get`.
  - o `this._nome` está definindo uma **nova variável** apenas presente no escopo do objeto, ele vai auxiliar no momento de dar get e set. _obx: o `_` é uma convenção para dizer que ele está sendo criado para auxiliar o get e set_

- **get**: é o momento que o objeto **"pega"** um valor.
  - caso o retorno dele seja estático (sem retornar o `this.`), quando for pegar os valores desse método sempre será o mesmo mesmo fazendo uma alteração com o `set`

- **set**: é quando o objeto **altera** um valor.
  - sempre deve possuir um parâmetro (ele é o valor novo que está sendo passado).

- caso o método não possua o `set`, esse método não poderá ser alterado.
- caso o método não tenha o `get`, o valor que for retornado ao pegar esse método, será `undefined`
