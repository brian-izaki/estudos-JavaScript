## Anotações sobre Event Bubble
Event bubble, faz referência a uma bolha realmente, pois uma bolha no fundo do mar irá subir, assim como um evento que irá percorrer do elemento que ativou até o elemento mais alto da hierarquia (`window`) percorrendo cada um deles.

- O event bubble está presente em todos os elementos

- O evento que estiver na categoria mais alta será executado após o evento da categoria baixa, ou seja, o evento `click` em um botão faz adicionar uma classe CSS, e o mesmo evento no `body`, faz retirar essa mesma classe e no final ninguem vê a classe CSS pois foi **retirada no evento da hierarquia mais alta**.

- A ordem de hierarquia: 
  1. window
  2. html
  3. body
  4. ... (outros elementos que seguem de acordo com a identação)

- Sabe-se que um evento possui o `event.target` que tem como resultado o elemento que ativou o evento, assim como o `this` (`event.currentTarget`) do evento, ou seja, o escopo ao qual está. No artigo do maujor é explicado que o `target` se mantém constante com o elemento que ativou o evento porém, o `this` é alterado conforme o *`Bubbling`* ocorre, pois o escopo do evento passa a ser do elemento que está subindo pela hierarquia.

- Existe uma forma de parar essa propagação de eventos até o elemento da hierarquia mais alta e para isto, é utilizado a função `event.stopPropagation()`, isso torna os eventos independentes em cada elemento. No exemplo dado do botão, a classe CSS seria adicionada e todo mundo veria e quando fosse clicado no `body`, ele seria retirado.

---

## Capturing

Ele ocorre nos navegadore modernos (não no IE9), e segue a mesma lógica do bubble, com exceção da **hierarquia que é vista da mais alta para a mais baixa**, ou seja, o clique de um botão não repercute dele até o `body` mas, do `body` até o botão

- Para poder ativar o `capturing` é necessário colocar `true` no terceiro argumento do `.addEventListener` ex:
  ```JavaScript
  elem.addEventListener('click', callback, true)
  ```

- Esta fase também é abordada no artigo no Maujor.

### Referências 
- [publicação no imasters do Maujor](https://imasters.com.br/front-end/javascript-bubbling-e-capturing)
