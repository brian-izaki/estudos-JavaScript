## Transversing 
É como navegar pelos elementos do DOM. Para isso, é necessário capturar um elemento, e então utilizar propriedades para saber sobre elementos pais, próximos e anteriores.

- `.parentElement`: retorna o **elemento** pai do elemento capturado.

- `.nextElementSibling`: retorna o próximo **elemento** que é "irmão".

- `.previousElementSibling`: retorna o **elemento** anterior que é "irmão"

- `.children`: retorna os elementos filhos do **elemento** selecionado

- `.nextSibling`: retorna o próximo **node(*nós*)** que é "irmão".

- `.previousSibling`: retorna o **node** anterior que é "irmão"

- `.childNode`: retorna todos os **nodes** filhos do elemento.

*obs: os métodos .querySelector() e o .querySelectorAll() também fazem parte do tranversing*

### Anotações

- **Node**: representa um nó, esse nó pode ser várias coisas no código, desde um elemento, quebra de linha, comentários, etc.

- **Element**: represeta apenas os elementos HTML

---

## Manipulando elemento

Os elementos podem ser alterados de lugar, adicionados via JS, deletados, etc.

- `elementoRecebedor.appendChild(elementoDesejado)`: move o elemento desejado para o elemento recebedor.

- `elemenRecebedor.insertBefore(elemenNovo, elemenRef)`: adiciona o novo elemento antes do elemento de referencia. *O elemenRef deve ser obrigatoriamente filho do elemenRecebedor*.

- `elemenRecebedor.removeChild(elemenARemover)`: remove o elemento especificado no argumento do elemenRecebedor.

- `elemenRecebedor.replaceChild(elemNovo, elemVelho)`: troca o elemento antigo pelo novo.

- `document.createElement('nomeTag')`: cria um novo elemento HTML no JS, caso queira adicionar para visualizar o elemento novo, é possível utilizar o `.appendChild(elementoNovo)` ou outros métodos vistos anteriormente.

- `elemenASerClonado.cloneNode(true)`: clona um elemento com todo o conteúdo dentro caso seja passado `true` como argumento, caso não, é apenas clonado o elemento vazio.

---

## Anotação sobre manipulação de texto no elemento

Propriedades que pegam o valor em texto ou o HTML inteiro do elemento.

- `.outerHTML`: ele retorna o HTML por completo do elemento (externo e interno)
  - ex: 
    ```JavaScript
    // <p> Olá <br />  mundo </p>
    console.log(elemento.outerHTML) // <p> Olá <br />  mundo </p>
    ```
- `.innerHTML`: ele retorna o HTML apenas interno do elemento
  - ex: 
    ```JavaScript
    // <p> Olá <br />  mundo </p>
    console.log(elemento.innerHTML) // Olá <br />  mundo
    ```
- `.innerText`: ele retorna apenas o texto do elemento, sem nenum tags HTML dentro.
  - ex: 
    ```JavaScript
    // <p> Olá <br />  mundo </p>
    console.log(elemento.innerText) // Olá mundo
    ```

