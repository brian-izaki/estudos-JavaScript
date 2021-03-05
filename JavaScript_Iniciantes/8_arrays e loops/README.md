## Anotações sobre Arrays

- Grupo de valores relacionados
- Armazena varios valores dentro de uma variável
- Um array é representado pelo `[]`
  - Em algumas linguages o colchetes é conhecido por iniciar uma "lista"
- Os valores dentro de um array possuem **índices**, ex: 
  - ```JavaScript
      // neste caso, os valores são as strings,
      // em todos os arrays, o índice é a posição em que o valor está

      // o índice inicia com 0(zero), ou seja, 'one piece' tem indicee 0
      const animes = ['one piece', 'bleach', 'haikyu']
      //                  0           1         2

      // forma de pegar um valor do array
      let indice0 = animes[0]
      let indice1 = animes[1]
      let indice2 = animes[2]

    ```
- dentro de um array é possível armazenar qualquer tipo de dados (number, string, objetos, booleanos)

- Array possui métodos específicos para manipular ela.
  - `pop()`: remove o ultimo indice do array
    - **retorna** o valor removido.

  - `push('adicionado')`: adiciona mais um índice no final do array
    - **retorna** o índice que o valor foi adicionado.

  - `forEach((valor, indice, array) => {})`: realiza um loop no array, percorrendo cada valor. 
    - é necessário passar uma callback como argumento, essa calback possui como parametros valor e indice atual que está sendo percorrido e o array em si. No bloco da callback é executado o que deseja fazer com o valor atual do loop.
    - **retorna** vazio

--- 

## Anotações sobre loops

### **For loop**
- fará loops de acordo com a regra que for especificada para ela:
- ```JavaScript
  //    variável    condicional  incremento
  for(let numero=0; numero < 10; numero++){
    // bloco do for
    console.log(numero)
  }
  ```
  
  - Explicando o `for`: 

    1. **variavel**: tem o escopo *somente dentro* do bloco `for`, ele é o valor por quem o loop irá iniciar.

    2. **condicional**: para dar um limite no loop (para n ser infinito), neste caso ele verifica se a variável `numero` é menor que 10, caso seja, execura o bloco do for, caso não seja, ele para o loop

    3. **incrementação**: após o término do bloco ele vai adicionar mais 1 à variavel `numero`, e então iniciar o `for` novamente.
    
    4. **Funcionamento**: na primeira execução ele instância a variável e faz a verificação na condicional, após o término do bloco ele realiza a incrementação (3º comando no `for`), na segunda execução será verificado a condicional, se der `false` ele para a execução e não executa o bloco, caso dê `true` ele executa o bloco novamente e ao término realiza a incrementação, assim em diante.

### While loop
- Faz loops de acordo com a condicional, porém antes é necessário instanciar uma variável para ser incrementado e no final do bloco do `while` é necessário fazer a instrução para a incrementação.
- ```JavaScript
  // variável
  let numero = 0;

  // estrutura de repetição
  while(numero < 10) {
    console.log(numero);
    // incrementação
    numero ++;
  }
  ```
  - Diferente do loop `for` a variável **não se limita** apenas ao escopo do bloco do `while`.