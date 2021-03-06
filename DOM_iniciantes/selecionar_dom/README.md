## Anotações sobre Selecinar elementos do DOM

Assim como visto na pasta `sobre_DOM`, a seleção de elementos com o JavaScript permite alterar alguns atributos de um elemento HTML. Para que seja possível realizar as alterações é necessário "capturar" esse elemento e então depois dar comandos a ele ou estilizar.

--- 

### Métodos para capturar

Para uma comunicação com a árvore do DOM é sempre necessário utilizar o atributo do `window` chamado `document`

- `.getElementById('nome_do_Id')`: um elemento através do Id dele.
  - retorna o elemento em si.
- `.getElementsByClassName('nome_da_classse_CSS')`: todos os elementos com a classe CSS.
  - retorna uma HTMLCollection
- `.getElementByTagName('nome_da_tag')`: todos os elementos com o nome da tag
  - retorna uma **HTMLCollection**
- `.querySelector('usar_seletor_CSS')`: o primeiro elemento que o seletor CSS corresponder
  - retorna o elemento em si.
- `.querySelectorAll('usar_seletor_CSS')`: todos os elementos que o seletor CSS corresponder
  - retorna uma **NodeList** 

## **Observação**: 

- `Array-like`: 
  - Parecem ser Arrays, porém não são.
  - A principal diferença é nos métodos que não são possíveis de utilizar.

- `HTMLCollection` vs `NodeList`:
  - Seus métodos e propriedades são diferentes
  - ambos são array like
  - `HTMLCollection`: 
    - Menos métodos que o NodeList. ex: não pode usar o forEach
    - **atualiza** seu valor mesmo depois de ter capturado o elemento
  - `NodeList`: 
    - Mais Métodos que o HTMLCollection. ex: pode user o forEach
    - **não atualiza** seu valor mesmo depois de ter capturado o elemento
  - *Caso queira utilizar métodos de array pode transformar eles com o Array.from(), porém com isso, ele perde a vantagem do HTMLCollection de alteração dinâmica.*