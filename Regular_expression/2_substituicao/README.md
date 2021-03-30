## Anotações sobre substituição

- `$&`: é utilizado para manter uma referência da palavra selecionada.

- Grupo de captura
  - `()`: tudo que estiver dentro do parenteses será considerado um grupo de captura.
    - é feito a seleção da string, e dentro dela pode ter palavras isoladas que deseja escolher, para isto é utilizado o grupo de captura.
    - um item agrupado pode ser selecionado utilizando o `$n`, sendo n o numero grupo criado
    ```JavaScript
    /(\w+)@([\w.]+)/ 
    ```
      - no exemplo acima serve para capturar um email simples.
      - Na seleção, o email inteiro será capturado, mas dentro dele, terá referências aos grupos selecionados.
      - será criado 2 grupos, um pega antes e o outro pega depois do `@`.
      - o primeiro grupo pode ser visualizado utilizando o `$1` e o segundo `$2`.
  - look ahead:
    - são utilizados dentro do parenteses para fazer uma seleção mais específica.
    - `/(?=ate)/`: **não irá selecionar** os caracteres 'ate', mas irá buscar onde elas se encontram. Para selecionar pode ser passado antes e/ou depois do `()` por exemplo, caso queira selecionar quem estiver pra tras de 'ate' utilize `\w+`.
    - `/(?!ate)/`: mesma coisa que o de cima, com a diferença que nega os caracteres 'ate', e busca todos que não tenham esse padrão de caracter.

--- 

### Referencias para mergulhar

- [look ahead](https://javascript.info/regexp-lookahead-lookbehind)