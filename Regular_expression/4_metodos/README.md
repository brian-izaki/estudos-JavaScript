## Anotações sobre Métodos do RegeExpr no JS

- Possui um Objeto especifico para ele
  ```JavaScript
  new RegExp('\\w+', 'g')
  ```
    - o primeiro argumento a ser passado é o padrão regexp que deseja
      - a barra de scape deve ser utilizada **duas vezes** nesse modo.
    - o segundo argumento é a flag desse padrão

- propriedades de uma regexp no JS: 
  - `.flags`: mostra as flags que o regexp possuí.
  - `.global`: bool se tem flag `g`
  - `.ignoreCase`: bool se tem flag `i`
  - `.multiline`:bool se tem flag `m`
  - `.source`: traz padrão dentro das `\\`

- **métodos do regexp**: 
  - `.test()`: retorna booleano e é uma função iterável, ele guarda o ultimo índice do caracter encontrado com o regexp feito e na próxima vez que é executado ele inicia a busca por esse ultimo indice. 
    - para saber em qual índice está, pode ser utilizado o `.lastIndex` na regexp (não na string)
    - no momento que der false, a próxima vez que for executado ele volta para o início.
  - `.exec()`: **retorna uma array** e realiza a mesma iteração do `.test()`, com a diferença que ele vai trazer mais informações, como a palavra capturada, indice dela, grupo dela.
  
  - `.exec` e `.test` são equivalentes na iteração do regexp, ou seja, executar `test()` duas vezes aconteceria a mesma coisa se executar um `test()` e um `exec()` na mesma variavel com o padrão (o lastIndex altera).

- **métodos da string** para usar regexp: 
  - `.match(regexp)`: retorna um array com todos os caracteres encontrados com o padrão **quando é utilizado a flag `g`**
    - quando não é utilizado, ele retona os mesmos dados que o método `exec()` do regexp.
    - caso não tenha correspondencia ele retorna null.
  
  - `.split(regexp)`: no argumento além de strings **é possível passar regexp** também.

  - `.replace(regexp, valorSubstituido)`: ao invés de passar uma string para busca, pode ser utilizado um regexp.
    - dentro do **segundo argumento**, caso a regexp possua um **grupo de captura, é possível acessar** esse grupo com `$1` nesse, ele pega o primeiro grupo caso tenha mais apenas troque o valor do número. 
    - também é possível acessar o conteudo capturado por completo com o `$&`;