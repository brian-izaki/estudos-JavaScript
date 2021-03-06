## Anotações sobre dimensões
- É necessário capturar um elemento para verificar o width (largura) e height (altura) dele.

- eles são métodos dos objetos Element e HTMLElement.

- *obs: caso queira a largura é apenas trocar o height por **width***
- `.getBoundingClientRect()`: método que traz um objeto com as informações de altura e largura do elemento e a distancia dele com relação à página.

- `.clientHeight`: atributo que retorna o `height + padding` do elemento que é mostrado em tela.

- `.offsetHeight`: retorna o `height + padding + border` do elemento que é mostrado na tela.

- `.scrollHeight`: retorna o height total mesmo que ele esteja dentro de um scroll interno com o `overflow-Y` do CSS. 

- `window.innerWidth`: pega tamanho da tela que tem o conteudo HTML que está sendo mostrado.

- `window.outerWidth`: pega o tamanho da tela + a barra de cima do navegador.

- `window.matchMedia('(max-width: 900px)')`: forma de fazer media query no JavaScript, o argumento passado é um media query igual ao utilizado no CSS. Ele tem o atributo `.matches` retorna booleano para o caso de ter ou não o tamanho da tela especificado.

---

## Anotações sobre distâncias
- o window também possui propriedades para saber o tamanho da tela do dispositivo.

- `pageYOffset`: distancia de quanto o scroll se distanciou do topo da página.

- `.offsetTop`: distância com relação ao topo da página, pode ser usado `.offsetLeft`, `.offsetRight`, `.offsetBottom`

---

### Observações
- caso queira saber propriedades de um elemento de forma rápida no navegador, pode-se clicar sobre o elemento no inspetor (F12) e no console digitar o `$0` com isso será pego o elemento que foi clicado.

- O *JavaScript carrega primeiro que as imagens*, logo, caso queira pegar o tamanho de uma imagem ela fica zerado pois pode ser que a imagem ainda não tenha carregada e o JS tenta pegar o tamanho de uma imagem vazia. **Para contornar isso**, é necessário esperar carregar a página e então verificar o tamanho, e é utilizado o `window.onload` que é uma callback para executar apenas depois da renderização da página.