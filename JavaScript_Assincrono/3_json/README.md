## Anotações sobre JavaScript Object Notation (JSON)

- É um formato parecido com o de um objeto no JavaScript.
  ```JSON
  [
    {
      "arrayObjetos": "objeto"
    },
    {
      "chave": "valor",
      "numero": 12,
      "booleano": true,
    }
  ]
  ```
  - Aspas duplas são obrigatórias em strings

- É independente da linguagem, existem interpretadores em diferentes linguagens de programação

- Serve para armazenar e transportar dados de forma simples (mesmo objetivo que o XML)

- No `JavaScript` existe um objeto que auxilia na manipulação de dados em ``JSON``
  - métodos do objeto: 
    - `JSON.parse(textoEmJSON)`: converte um texto com formato json em um objeto.
    - `JSON.stringfy(objeto)`: converte um objeto em um texto.

