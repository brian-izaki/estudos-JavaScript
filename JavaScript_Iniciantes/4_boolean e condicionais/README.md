## Anotações sobre booleanos

- Booleanos são valores `True` ou `False`;
- Alguns valores não são especificados diretamente como `True` ou `False` mas, logicamente são comparados a isso.
- Valores considerados __False__:
  - `0`  - (zero)
  - `NaN`
  - `null`
  - `undefined`
  - `''` - String vazia
- Valores considerados __True__:
  - qualquer numero diferente de zero
  - String com espaço ou qualquer valor
  - objeto vazio

- ## Operadores lógicos

  - Comparação: 
    - __igual:__ esse é __`===`__ a esse
    - __diferente:__ esse é __`!==`__ a esse
    - obs: quando usado `===` compara valor e tipo de dado, se usado `==` compara apenas o valor
    - __maior:__ esse é __`>`__ que esse
    - __maior ou igual:__ esse é __`>=`__ que esse
    - __menor:__ esse é __`<`__ que esse
    - __menor ou igual:__ esse é __`<=`__ que esse
    ---
  - Operadores da [Tabela Verdade](https://pt.wikipedia.org/wiki/Tabela-verdade)
    - __AND (conjunção):__ esse __`&&`__ esse (Apenas caso _um dos valores_ seja `False` a comparação será considerada `False`)
    - __OR (disjunção):__ esse __`||`__ esse (Apenas caso _um dos valores_ seja `True` a comparação será considerada `True`)
    -  __Negação (NOT):__ exclamação( `!` ) inverte o booleano, o que é true vira false, vice versa
    
  


## Anotações sobre  condicionais

- São momentos que uma condição determina qual caminho seguir
- São utilizados `if(true){1º} else{2º}`, o primeiro bloco executa se a conticional der verdadeira, o segundo caso dê falso;
- Switch é utilizado para casos onde tem mais de uma possibilidade e precise de uma ação diferente para cada;
  - Porém demanda muito processo e para isso existe o [object literals](https://dev.to/lukyhenson/substitua-sua-instrucao-switch-e-varios-if-and-else-usando-object-literals-pt-br-4po9) onde cria-se um objeto e pode acessar a propriedade que tenha algum valor ou função e isso diminui o processo de decisão.


