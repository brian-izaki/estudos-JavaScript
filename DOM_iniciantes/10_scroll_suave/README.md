## Anotações da aula

- Para realizar o scroll suave foi necessário

  - pegar o link passado no `href` da minha `a` e depois pegar a `section` com o `id` referente ao meu `href` selecionado

  - depois com a `section` referente à minha `ancora` foi necessário utilizar um método nativo do `window` chamado [scrollTo](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scrollTo):
    ```JavaScript
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    })
    ```

  - possui a opção de utilizar o [scrollIntoView](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView):
    ```JavaScript
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    ```

  - _obs: ambos os métodos utilizados não tem amplo suporte em alguns browsers [scrollTo](https://caniuse.com/element-scroll-methods) e [scrollIntoView](https://caniuse.com/scrollintoview)_
