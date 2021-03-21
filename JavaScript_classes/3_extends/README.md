## Anotações sobre extends

É uma forma de criar subclasses (herança na orientação a objetos).
  ```JavaScript
  class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }

    falar() {
      return 'Falou algo.'
    }
  }

  class Cozinheiro extends Pessoa {
    fazerCurry() {
      return 'preparando Curry'
    }
  }
  ```
  - A keyword `extends` "extende" a classe Pessoa para a classe Cozinheiro, assim, fazendo de Cozinheiro uma subClasse de Pessoa.

- Subclasse:
  - **possui todos os métodos e atributos da classe mãe** e pode adicionar ou alterar métodos.

  - métodos adicionados vão pertencer apenas para a subclasse, e métodos alterados vão sobrescrever os da classe mãe.

  - Uma subclasse pode ter sua própria subclasse.
  
  - `super()`: torna possível utilizar as propriedades da classe mãe que são definidas no construtor dela, pois, quando é definido um `constructor` na subclasse as propriedades são zeradas.
    ```JavaScript
    class Professor extends Pessoa {
      constructor(nome, idade, lecionaMateria) {
        super(nome, idade)
        this.lecionaMateria = lecionaMateria;
      }

      falar() {
        console.log(super.falar())
        return 'falando pela segunda vez'
      }

      ensina() {
        return 'este professor ensina ' + this.lecionaMateria
      }
    }
    ```
      - a ordem dos argumentos no `super` importa. A ordem é a mesma passada no `constructor` da classe mãe.
      - é necessário passar nos parâmetros do `constructor` da subclasse os parâmetros da classe mãe.
      - o super pode ser utilizado dentro dos métodos também, chamando os métodos originais da classe.
      
