## Anotações sobre [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
Ela realiza a promessa de executar algo. 

- Ela é uma função construtora.

- Ela recebe uma callback como argumento, e nessa callback ela tem dois parametros padrões, uma é a `resolve` e a outra `reject`.
  - Os dois parametros são funções que ditam como a promesa será retornada (resolvida ou rejeitda) no `resolve(valor)` o valor é o que será retorna da promessa, no `reject(Error)` será retornado uma mensagem de erro no console em vermelho.

- método e propriedades:
  - `.catch( (rejeitado) => {} )`: ele será executado quando a promessa executa o `reject()`. 
    - Ele não mostra o erro em vermelho no console.

  - `.then( (resultado) => {} )`: esse método pega o valor que é retornado de uma promise que executou o `resolve()`, e o `resultado` será esse valor.
    - um `.then` retorna uma outra promise, com isso é possível realizar um encadeamento dele (`.then().then()`) o valor de `resultado` do segundo `then` será o retorno que ocorreu no primeiro 
      - caso não tenha declarado um retorno o valor retornado será `undefined`.
    
    - o `then` **pode ter um segundo argumento**, `. then( resolve => {}, reject => {} )`, esse segundo argumento é a mesma coisa que utilizar o `.catch()`.
  
  - `.finally( () => {} )`: será **executado sempre**, independente da promessa ter utilizado `reslve()` ou `reject()`.
  

- `Promise.all( [...Promise] )`: executa várias promeesas, com a diferença de que ou ele retorna as promessas **todas resolvidas** _**ou**_ ele retorna a **primeira a ser rejeitada**
    - é um método direto do objeto `Promise`
    - retornará uma array com os valores das promessas resolvidas.

- `Promise.race( [...Promise] )`: parecido com o método `.all` mas ela vai retornar apenas a primeira promise que tiver sido resolvida.

