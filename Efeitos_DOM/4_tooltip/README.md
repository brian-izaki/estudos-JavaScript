## Anotações da aula

- Tooltip é uma caixa de informação que aparece quando passa o mouse por cima de algo na página.

- O atributo `data-tooltip` ficou sem dados pois será apenas para capturar o elemento dentro do JS.

- O texto da tooltip ficará armazenada no atributo `aria-label` para melhorar a acessibilidade. 
  - O atributo poderia ser substituido por `title` porém, com ele aparecerá uma caixa de mensagem padrão. com o `aria-label` ele não aparece. 
  - o foco do `aria-label` e `title` é a acessibilidade que fornecem para os leitores de tela.

- para pegar o posicionamento do mouse e adicionar nas propriedades CSS, foi utilizado o evento `mouseOver`, `style` do elemento e as propriedades `pageY` e `pageX`.

- Utilizado o `mouseleave` para poder retirar o tooltip e não ter várias caixas de texto ao mesmo tempo durante movimentação do mouse no mapa.
  - Para desacoplar funções no código:
    - no JS foi utilizado um objeto com uma função no lugar do callback do `addEventListener`.
    - o método dentro do objeto precisa ter o nome de `handleEvent` obrigatoriamente.
    - [referencias](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener#o_valor_de_this_no_manipulador)

- **`mouseMove` não é otimizado para dispositivos mobile.**