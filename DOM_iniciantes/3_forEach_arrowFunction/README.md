## Anotação forEach
- **Método do Array** para percorrer os valores de um array, 
- ele não possui retorno.
- é necessário passar uma callback (função) como parâmetro.
  - essa callback é aplicado em cada valor que for percorrido dentro do array.
  - dentro da callback pode ser passada 3 parametros: 
    - 1º é o valor, 
    - 2º índice desse valor dentro do array, 
    - 3º é o array completo.

---

## Anotação Arrow Function
- é uma forma **resumida** de **criar uma função anônima** (função anônima é uma função que não tem nome, geralmente utilizada em callbacks)
  ```JavaScript
  // declarando uma arrow function 
  const handleFunction = (parametro) => {
    console.log(parametro)
  }
  // só tendo um parametro
  const handleFunction2 = parametro => {
    console.log(parametro)
  }

  // só tendo um retorno
  const handleFunction3 = parametro => console.log(parametro)
  ```