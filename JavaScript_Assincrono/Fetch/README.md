## Anotações sobre Fetch

É uma API da Web, presente nos navegadores. Esta API realiza requisições HTTP e retorna uma promise com os dados buscados pela requisição, ou seja, esta é a maneira do site se comunicar com a parte back-end (servidores).

```JavaScript
fetch('url').then(response => {
  console.log(response)
})
```

- `response` possui dados sobre o que foi retornado da requisição. 
  - corpo da requisição (os dados que você pediu na requisição)
  - cabeçalho da requisição
  - status, etc

- Para pegar os dados da requisição é necessário utilizar métodos presentes no **body da resposta**. Esses métodos retornam mais uma promise, portanto para pegar os dados é necessário utilizar mais um `.then()`.
  ```JavaScript
  fetch('url').then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json)
  })
  ```

- métodos da resposta do `fetch`:
  - `response.text()`: transforma em texto.
  
  - `response.json()`: transforma em `objeto`.

  - `response.blob()`: alguns dados são muito grandes (geralmente imagens, arquivos, etc) e para isso é necessario converter para um formato que o JS possa ler. Este método captura esses tipos de dados.

  - `response.clone()`: clona o response de uma requisição. Pois, uma vez que um response utiliza os métodos acima, esse response fica "lido" o que impede de utilizar dois desses métodos no mesmo response.

  - `response.headers`: retorna o cabeçalho da resposta HTTP.
  - `response.status`: retorna o [status da requisição](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
  - `response.type`: tipo da requisição (permissóes das requições).

---

## Referências
- site [viacep](https://viacep.com.br/) para buscar dados sobre o CEP