## Anotações sobre Async e Await

- Com o `async`, é especificado que uma função será assíncrona,

- Com o `await`, fala que irá esperar pelo código assíncrono para continuar (ele é parecido com o método `then`).
  - `await` apenas irá esperar por métodos que **retornam promises**.
  ```JavaScript
  async function funcaoAssincrona() {
    const dados = await fetch('url')
    console.log(dados)
  }
  ```

- É uma forma mais simplificada de usar o `then` de uma promessa

- para pegar os erros basta utilizar o tratamento com `try{} catch(){}`:
  ```JavaScript
  async function funcaoAssincrona() {
    try{
      const dados = await fetch('url')
      console.log(dados)
    } catch(erro) {
      console.log(erro)
    } finally {
      console.log('sempre ocorre')
    }
  }
  ```
  - o código no bloco do `try`, tenta executar o código, 
  - se der erro vai cair no código do `catch` e parar a execução retornando o erro.
  - se não, continua o código de forma normal
  - o `finally`, vai ser executado independente de cair no `catch` ou `try` 
    - caso dê erros, e queira executar algum código q deve ocorrer mesmo assim, o bloco do finally serve para isso.