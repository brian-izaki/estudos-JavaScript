## Anotações da aula

- Criado um `HTML` próprio para estudar sobre o formulário, o JS para manipulação dele está inline no `HTML`.

- É possível manipular inputs nos formulários com JS.

- `document.form.elements`: retorna os elementos que sejam `inputs`, `textarea`, `select`, entre outros, dentro de um ou mais formulário no HTML.

- **elemento `input`** (é uma caixa de texto no formulário): 
  - tipos de input:
    - `color`: mostra uma paleta de cores para escolher.
    - `date`: mostra um mini calendario para escolher um dia
    - `number`: permite apenas numeros no input
    - `range`: 
    - `password`: cada caracter se torna uma circulo preto para não mostrar o que está sendo digitado.
    - `checked`: caixas de seleção que pode ser selecionado mais de uma caixa. O principal atributo dele é o `.checked` que retorna um booleano se deixo um "check" ou não.
    - `radio`: também é para seleção mas, poderá selecionar apenas uma das opções dentro de um grupo de input `radio`.
      - Um **grupo é criado** quando são definidos diferentes `inputs` do tipo `radio` com o mesmo atributo `name`.
  
  - métodos e propriedades: 
    - `input.target`: retorna o elemento.

    - `input.target.value`: retorna o valor dentro do `input`

    - Para realizar validações nativas com JS é utilizado o método `.checkValidity()` presente no elemento `input`, ele retorna um booleano dizendo se o campo foi preenchido corretamente.
      - as validações são de acordo com o tipo especificado no atributo `type`, como email, text, number, etc.

      - existe uma propriedade chamada `.validationMessage`, nela existe a mensagem padrão quando erra o input, a mensagem dela pode ser alterado utilizando o `.setCustomValidity('mensagem nova')`
        - cada input possui sua própria `.validatiionMessage`, ou seja, se alterar a mensagem especificamente de um elemento, a mensagem não vai se repetir nos outros.

- **elemento `textarea`**: serve para ter uma caixa texto que pode ter mais de uma linha.

- **elemento `select`** (é uma caixa que mostra opções para selecionar): 
  - ao definir um `select` é necessário adicionar o elemento `<option value="valorReal">Apenas visualização</option>` dentro dele, cada option deve possuir um atributo value (esse, será o responsável por transmitir o valor selecionado).


- nos input do tipo `radio` e `checked` é importante colocar o atributo `value` para qual o valor que foi selecionado.