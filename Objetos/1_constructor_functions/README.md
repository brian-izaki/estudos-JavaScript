## Anotações sobre Constructor Functions

Problema: criar um objeto que possa ser utilizado como base para a criação de outros objetos (**parecido com Classe abstrata no Java**).

- Com o JS, é possível utilizar uma _constructor function_ para que um objeto possa se comportar como uma classe abstrata.

- A palavra reservada `this` é o responsável por armazenar os atributos e métodos ao seu construtor. Caso não seja passado o `this` a variavel criada fica _apenas disponível para ser acessada dentro da função construtora_.

- Para instanciar um **novo objeto** é necessário utilizar a palavra reservada `new`
  ```JavaScript
  function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
  }

  const honda = new Carro('honda', 2000);
  ```
  1. ele cria um objeto novo.
  2. define um protótipo do construtor chamado.
  3. aponta o this para o novo objeto criado (honda).
  4. executa a função substituindo os valores do this.
  5. retorna o novo objeto criado.