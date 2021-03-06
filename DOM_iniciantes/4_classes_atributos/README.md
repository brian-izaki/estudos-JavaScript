
## Anotações manipulando classes CSS
- Para acessar o atributo para manipular o CSS é necessário capturar um elemento específico (ex: ul, li, p, div, etc.


### Métodos e propriedades estudadas: 
- `.className`: tem o nome das classes do elemento em forma de string
- `.classList`: retorna um array com cada classe em uma posição
  - `.add('nomeClasse'[, 'outraClasse'])`: adiciona uma classe no elemento
  - `.remove('nomeClasse')`: remove uma classe.
  - `.toggle('nomeClasse')`: se tiver o nome da classe no elemento ele remove, se não houver ele adiciona.
  - `.contains('nomeClasse')`: retorna um booleano para verificar se a classe existe ou não.
  - `.replace('nomeClasseASerTrocada', 'novaNomeClasse')`: substitui o nome de uma classe.

---

## Anotações manipulando atributos

- Para acessar o .attributes para manipular o atributo do elemento é necessário capturar um elemento específico (ex: ul, li, p, div, etc.

### Métodos e propriedades estudadas: 
- `.attributes`: retorna um objeto que parece um array, como todos os atributos e seus valores do elemento.
- `.getAttributes('nomeAtributo')`: retorna o valor do atributo que é especificado.
- `.setAttributes('nomeAtributo', 'novoValorProAtributo')`: altera o valor que tem no atributo pelo segundo argumento
- `.hasAttributes('nomeAtributo')`: verifica se existe o atributo no elemento.
  - quando não é passado nenhum argumento, ele verifica se tem ou não atributos no elemento.
- `.removeAttributes('nomeAtributo')`: remove o atributo especificado


## Propriedades read only ou writable
- algumas propriedades podem ser alteradas (writable), e outras não são possíveis altera, apenas ler (read only)
