## Anotações sobre Dataset
Dataset será utilizado para facilitar a manipulação de elementos HTML com o JS pois, com ele fica mais fácil de armazenar dados customizados que não sejam vísiveis na página.

- É um atributo **presente em todos os elementos** `HTML`.
  - após o `data-` pode ser colocado qualquer texto que desejar (é como se fosse uma variável)
  ```HTML
  <h1 data-titulo='titulo'> Título </h1>
  <p data-nome='brian'> esse é um nome </p>
  <p data-descricao-nome='desc'> descrição </p>
  ```
  - na definição do nome no HTML não pode ter letra maíuscula, mas pode dividir o nome com `-`.
  

- Pertence ao Objeto `HTMLElement`

- É do tipo DOMStringMap, que é um objeto com **chave-valor** que vai armazenar os valores de `data-` dentro do objeto.
  ```JavaScript
  DOMStringMap {
    titulo: "titulo"
  }
  DOMStringMap {
    nome: "brian"
  }
  DOMStringMap {
    descricaoNome: "desc"
  }
  ```
  - **no JS**, por um objeto não poder receber o `-` no nome de um atributo, datasets que possuem esse character se tornam `camelCase` (visto no descricaoNome)
  - cada elemento recebe seu próprio `DOMStringMap` com seus respectivos `data-`.

- No CSS esse atributo é selecionado utilizando o `[]`
  ```CSS
  [data-nomedataset] {}

  [data-nomedataset="valoDataset"] {}
  ```

