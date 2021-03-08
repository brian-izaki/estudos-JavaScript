## Anotações sobre eventos

Os eventos são os responsáveis por capturar ações do usuário ou do código durante a execução do código, ele pode ser um click na tela, carregamento da página, mover o scroll da página, entre outros.

- `.addEventListener('nomeEvento', callback)`: método responsável por adicionar os eventos, ele é encontrado no `window`, elementos HTML pegos, entre outros. Esse evento é atribuído a um único elemento.
  - 1º argumento depende de quem chama esse método, pois dependendo do elemento pode ser um click, ou um onload, entre outros.
  - 2º é uma função que é executada caso o evento passado no 1º argumento ocorra.
    - Na callback existe um argumento chamado `event` que pode ser utilizado para saber mais especificamento sobre o elemento que executou o evento. ex:
      ```JavaScript
      elemento.addEventListener('click', (eventoPodeSerQualquerNome) => {
        console.log(eventoPodeSerQualquerNome)
      })
      ```
  
  - métodos e atributos o `event` estudados:
    - `.target`: traz o "alvo", ou seja, o elemento que acionou o evento.
    - `.currentTarget` ou usar `this`: traz o elemento pai do elemento que acionou o evento. ex: caso clique em uma `li`, ele trará o `ul`.
    - `.type`: traz o tipo do evento que foi acionado.
    - `.path`: caminho do elemento desde o objeto `window`.
    - `.preventDefault()`: previne o comportamento padrão de um evento. ex: uma tag ancora faz com que seja levado para o `href` especificado quando clicado, com este método a pessoa não será levada para o `href`.
  
  - [Eventos que podem ser utilizados](https://developer.mozilla.org/pt-BR/docs/Web/Events)