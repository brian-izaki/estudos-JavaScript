## Destructuring

Permite a desestruturação de um objeto ou array podendo ser atribuido a novas variaveis, seria como pegar uma barra de chocolate e fragmentar ela para colocar em potes separados da sua escolha.

- A desestruturação também pode ser feita nos parametros de uma função, caso seja passado um objeto ou array como argumento.

### Desestruturando objeto:
  ```JavaScript
  const objeto = {
    nome: 'Zenebes', 
    altura: 2.34,
    caracteristicas: {
      cor: 'vermelho',
      material: 'metal'
    }
  }

  const { 
    nome, 
    caracteristicas: { cor } 
  } = objeto;
  ```

- A desestruturação também pode pegar atributos aninhados ( `caracteristicas` ).

- O nome da variável na desestruturação deve ser o mesmo nome que estiver dentro do objeto.
  - Caso queira um **nome de variavel diferente do objeto**, deve utilizar `:` para personalizar o nome dela.
    ```JavaScript
    const { nome: nomePersonalizado } = objeto;
    ```

- Pode tentar pegar atributos que ainda não foram definidos.
  ```JavaScript
  const { aindaNaoTem } = objeto;
  ```
  - o **valor atribuido** a esta variavel será `undefined`
  - pode ser passado um valor padrão para caso seu valor venha como undefined com o operador `=`
    ```JavaScript
    const { aindaNaoTem = 'ainda não tem valor' } = objeto;
    ```
    - Caso o atributo tenha um valor dentro do objeto, o valor padrão passado no momento de definir a variável não será atribuida _(valor do objeto tem mais prioridade)_.

------
### Desestruturando Arrays
```JavaScript
const pokemons = ['Pikachu', 'Bulbassauro', 'Squirtle']

const [ posicao1, posicao2, posicao3 ] = pokemons;
```

- diferente dos objetos, a desestruturação é de acordo com o `**índice do elemento**` dentro da array.