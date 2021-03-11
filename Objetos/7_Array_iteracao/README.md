## Anotação Array e iteração
Métodos de iteração na array, eles interagem com cada elemento dentro da array através de loops.

- *obs: `callback = (item, index, array) => {}`*

- `.map` vs `.forEach`:

  - `.forEach( callback )`: o argumento `array` se for alterado, ele **altera o array original**, esse método não tem retorno

  - `.map( callback )`: faz a mesma coisa que o `.forEach`, com a diferença que **retorna um novo array sem alterar o array original**

  - Com mesmas funcionalidades, porém com algumas diferenças:
    - retorno dos métodos.
    - performance:  o `.map` possui melhor performance na **maioria das vezes** se comparado ao `.forEach`. <br />
    _obs: esse teste foi realizado utilizando o console.time e console.timeEnd_

- `.reduce( (acumulador, item, indice, array) => {}, valorInicial )`: retorna um valor único (valor que foi acumulado).
  - o `acumulador` na 1ª iteração será o valor definido em `valorInicial`

    - Se `valorInicial` seja omitido, o **acumulador irá iniciar** a partir do **índice 1** e o `acumulador` se torna o valor do **indice 0**
    
    - Na 2ª e demais iterações será o **retorno que teve na callback**

  - Ao final de todas iterações, ele retorna o valor do `acumulador`

  - Se **não passar valores ao return**, o acumulador será sempre `undefined`

  - O `valorInicial` e `acumulador` não se limitam a serem numeros, podem ser strings, objetos, etc 

- `.reduceRight`: possui a mesma estrutura do `.reduce`, a diferença é que a leitura da array será da direita para esquerda (←)

- `.some( callback )`: o retorno da callback deve ser uma expressão booleana pois, esta função pode verificar se tem **"algum"** valor que corresponda ao que deseja tem dentro da array. <br />
Semelhante ao operador `OR` (`||`)

- `.every( callback )`: verifica se todos os itens correspondem ao que deseja, ou seja, para que tenha retorno `true` todos os itens da array devem dar `true` na condicional passada. <br />
Semelhante ao operador `AND` (`&&`)

- `.filter(callback)`: retorna uma nova array com todos os items que retornem `true` na condicional dentro da callback.