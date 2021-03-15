## Anotações da aula

- Dropdown-menu é um menu dentro de um item do menu (menu dentro de menu), que aparece abaixo do item selecionado.

- Para o formato web foi utilizado apenas CSS utilizando estratégias ocm o `:hover`. Porém, para o mobile, o funcionamento do `:hover` não é otimizado, para isto foi necessário utilizar o JS.

- Quando for mobile, ao invés de utilizar o evento `click` será utilizado o evento `touchstart`, e será adicionado uma classe "ativo" para manter o submenu ativo, e desativar quando clicar no botão novamente.