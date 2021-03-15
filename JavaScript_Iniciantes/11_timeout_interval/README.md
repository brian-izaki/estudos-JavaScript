## Anotações setTimeout
Esta função executa uma callback após o tempo que for determinada a ela.

- Ela faz parte das WebAPIs
  - É método do `window`, ou seja, o `this` dele fará referência ao objeto `window` quando a callback for uma `function`
  - o `this` pode ser alterado de `window` para o escopo do objeto que ele foi aninhado apenas utilizando **arrow function** ( `() => {}` ). 


- É uma função `assíncrona`, ou seja, ela não segue a ordem de execução procedural (linha a linha), ela executa após a call stack (pilha de execuções do JS) estar vazia, antes disso ela fica na callback queue (fila de callback) aguardando ou sendo adicionado mais execuções assíncronas.

- `setTimeout(callback, tempo, ...arg)`
  - `callback` é a função que será executada quando o tempo chegar a 0
  - `tempo` é definido em ms(milisegundos), é normal ver códigos com `2 * 1000`, isso facilita a leitura, pois 1000 equivale a 1 segundo
  - `...arg` representa argumentos para a callback (caso necessite), ou seja, caso a função de callback precisar de argumentos, pode-se passar os argumentos após o tempo.

---

## Anotações setInterval

Executa uma callback a cada tempo, ou seja, fica executando a função dele depois do intervalo de tempo passado, diferente do `setTimeout` que espera o tempo e executa apenas uma vez.

- `setInterval(callback, tempo, ...arg)`


--- 

## Anotações clearInterval

Limpa um intervalo de tempo criado, mas é necessário passar a função de `setInterval` para uma variável.

- ex: 
  ```JavaScript
    const intervalo = setInterval(callback, 3000)

    clearInterval(intervalo)
  ```

---

- No exercício tem um cronômetro utilizando o setInterval.