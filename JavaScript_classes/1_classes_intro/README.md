## Anotações sobre Classes

Fazem a mesma coisa que as _constructor functions_, apenas mudam a sintaxe dela (syntatical sugar) pois, ainda continuar utilizando o sistema de protótipo dela.

- Estrutura:
  ```JavaScript
  class nomeClasse {
    constructor(param1, param2) {
      this.valor = param1;
      this.param2 = param2;
    }

    nomeMetodo(){
      return this.valor + this.param2;
    }

    static metodoEstatico() {
      return typeof this.valor === 'string'
    }
  }

  nomeClasse('valor1', 'valor2')
  ```

  - `constructor()`: ele é o responsável pelos parametros da classe no momento de instanciar ela.
    - o retorno do método `construtor` por padrão é o `this` (o objeto em si)
    - O retorno pode ser alterado. ex: retornar um método para já criar algo e não o objeto botão em si (perde o acesso ao objeto, **deixa a classe engessada**)

- **Métodos** (funções dentro da classe):
  - está sendo representado por `nomeMetodo` no exemplo acima. 
  - Funções que são **criadas no protótipo do objeto**, ou seja, objetos instaciados com o new poderão ter acesso a ela.

- **Static**
  - são métodos 
  - Cria o **método dentro da função construtora**, ou seja, o método apenas será possível ser acessado **sem ser instanciada com new** (assim como o `.isArray()` do construtor de `Array` ), logo, um objeto instanciado com new não terá acesso aos métodos com static.
  
    