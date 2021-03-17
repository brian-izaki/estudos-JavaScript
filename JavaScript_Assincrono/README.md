## Anotações [Assíncrono](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts)

Antes de entender o assíncrono, deve-se entender o síncrono e que a linguagem JavaScript é single thread, ou seja, ele apenas pode executar uma tarefa de cada vez.

- **Síncrono** é quando o código espera a execução da linha anterior terminar para então executar, e assim em diante

- Já no **assíncrono**, ele não bloqueia a execução da próxima linha mesmo que ainda não tenha terminado sua execução, ou seja, enquanto uma execução ocorre outra execução está sendo feito pelos fundos.

- Na engine do JS, existe a **call stack**, ela é uma estrutura de pilha que vai "pilhando" execuções _síncronas_, e existe a **task queue** que forma uma estrutura de fila com as execuções _assíncronas_ no background 
  - para as execuções assíncronas serem executadas elas precisam entrar na call stack e para entrarem nela, precisam esperar ela ficar vazia.
