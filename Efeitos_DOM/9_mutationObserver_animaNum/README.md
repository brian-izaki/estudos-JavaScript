
## Anotações sobre [MutationObserver](https://developer.mozilla.org/pt-BR/docs/Web/API/MutationObserver)
Observa um elemento para verificar se tem alterações, e realiza as "mutações" quando ocorre essa alteração.

- `new MutationObserver(callback)`: define o uso de uma mutação.
  - callback é a função que será executada quando o elemento que estiver sendo observado sofrer alterações.
    - a callback **possui parametros padrões** com propriedades e métodos **específicos das mutações que ocorrem**, ele é um array com objetos de `MutationRecord`.
    - o objeto `MutationRecord` é o **registro do que foi alterado** no elemento: nome, alvo, tipo, etc

  - Para observar um elemento é necessário utilizar o método `.observe(alvoObservado, opçoes)`
    - `alvoObservado` é o elemento (pego com `querySelector`) que vocé deseja observar se terá alterações.
    - `opçoes` é um objeto, que vc diz quais partes (atributos, aninhamentos no elemento, etc) desse elemento que você deseja observar, [ver na MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/MutationObserver#mutationobserverinit)

  - O observer vai ser disparado sempre que a alteração ocorrer, com isso, caso queira parar as observações basta utilizar o método `.disconnect()` dele, assim, parando o observer.

- arquivo JS referente a aula: ../../js/modules/animaNumeros.js


