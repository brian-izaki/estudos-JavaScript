## Anotações da aula

- Menu mobile, geralmente tem o nome de menu hambnburguer e pode ser representado por traços na horizontal uma em baixo da outra "≣"

- Maior parte do menu mobile está na parte do css.

- no código:
  - utilizado um button acima da ul
  - no button foi adicionado 2 atributos `data-menu` e `aria-expanded="false"` (serve para dizer que o elemento não está expandido)
  - foi alterado a função de `clickoutside` para que o evento de bubble não interferisse no evento de clique no botão menu. Para isso, foi utilizado o `setTimeout` para que terminasse o evento de bubble e aí sim executar a funão para aparecer o menu mobile.