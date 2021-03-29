## Anotações sobre seleção no Regexp

- busca simples

  - É utilizado o `//` e os caracteres que estiverem entre as barras será buscado.
    ```JavaScript
    /ab/
    ```
  - a seleção de caracreres é um seguido do outro, ou seja, "a" busca por a, "abc" buscará apenas por abc dentro da string.

- **Flag**

  - `//g`: todos os valores que corresponderem aos caracteres.
  - `//i`: não se importa se o caracter é maiúscula ou minúscula na string.
  - `//m`: permite que faça comparação em mais de uma linha.

- caracter **class** `[]`:

  - `/[abc]/`: os valores dentro do colchete faz alterar o comportamento de busca, ele vai selecionar os caracteres como se passasse uma regexp para cada caracter dentro do `[]`

    - pode ser passado caracteres especiais dentro (eles se tornam literais)
      ```JavaScript
      /[-.]/
      ```
    - pode ser utilizado para buscar letras que sejam diferentes
      ```JavaScript
      /ju[nl]ho/
      ```

  - `-`:

    - ele faz selecionar um valor até o outro valor,
      ```JavaScript
      /[A-Z]/ // seleciona todas letras maiúsculas
      /[a-z]/ // seleciona todas letras minúsculas
      /[0-9]/ // de 0 a 9
      /[0-9a-z]/ // de 0 a 9 e todas minúsculas
      ```
      - a seleção está de acordo com a **tabela unicode**.

  - `^` nega um caracter na string:
    - é colocado no início para negar (não selecionar) todos os caracteres que vierem na sua frente.
      ```JavaScript
      /[^abc]/
      ```

- Caracteres **especiais**:

  - `\` (scape): ele faz com que caracteres especiais sejam tratadas de forma literal.
    ```JavaScript
      /\./
    ```
  - `.` seleciona todos os caracteres, **menos** as quebras de linha.
  - `?` (opcional): indica se a letra antes da `?` tem ou não tem.
    ```JavaScript
      /casas?/ // pega palavras 'casa' e 'casas'
    ```
  - `|` (alternado): seleciona um ou outro.
    ```JavaScript
      /pokemon|digimon/ // seleciona palavras 'pokemon' e 'digimon'
    ```
  - `/\u/`: serve para selecionar caracteres especiais como o de copywright, arroba, etc. Para utilizar ele, é necessário utilizar o código unicode referente a cada caracter. ex: `/\u0470/` (seleciona 'Ѱ')
  - **Âncoras**:
    - `^` (de inicio): a **primeira linha** deve iniciar com os caracteres que estiverm à direira do `^`
    - `$` (de final): a **última linha** deve terminar com os caracteres que estiverem à esquerda do `$`
    - elas apenas pegam de uma linha, caso queira **pegar mais linhas deve utilizar a flag** `m`.

- `/\w/`: todos caracteres alphanumérico
- `/\d/`: tudo que é digito.
- `/\s/`: todos espaçoes em branco (quebra de linha, espaço e tabs).
- `/\b/` (boundary - fronteira): seleciona a string que **não** tiver um caracter alphanumérico na posição que o `\b` estiver. ex: `/re\b/` (seleciona 're' mas não 'remedio')
- Se utilizado `\W \D \S \B` (em maiúsculo) eles negam.

- Quantificador:
  - `/a{n}/` : o `n` dentro das chaves indica a quantidade que a letra `a` deve estar sendo repetida na string para capturar ela.
    - pode ser colocado uma quantidade mínima e uma quantidade máxima. ex: `/a{2, 4}/` (valor mínimo de repetição é 2 e o máximo 4)
    - `/ai+/`: ele serve para pegar uma ou mais ocorrencias em sequencia da letra, ou seja, caso tenha mais de um 'ai' junto eles serão capturados **juntos** e não separados.
    - `/ai*/`: faz a mesma coisa que o sinal de `+`, com a diferença que na palavra a ser pega, ela pode ou não apresentar a letra que estiver antes do `*`, ou seja, ela vai pegar todos os 'a' e todos os 'ai'.
