## Anotações sobre Modules

Separa (encapsula) funcionalidades para melhorar organização do código e futuras manutenções.

- As exportações podem ser funções, variaveis, Class.

- Os módulos por padrão ficam no modo `'use strict'` (limita ações que ferem as boas práticas com JS)

- Os nomes de variáveis e funções ficam encapsuladas nos módulos, ou seja, uma variavel que **não é exportada** fica **apenas dentro do escopo do módulo** não afetando outros arquivos.

- Utilizando módulos, o escopo global não é mais o `window` agr se torna `undefined` ;

- Utilizando modules:

  - na tag `script` do HTML:

    ```html
    <script type="module" src="js/script.js"></script>
    ```

  - no próprio arquivo JS:

    ```JavaScript
    // criando um módulo
    export default function ligarLuz() {}
    ```

    - utilizando o `default`, quando fazer importação do nome da função pode ser alterado no arquivo importado pois, por padrão será apenas a função `ligarLuz`.

    ```JavaScript
    // pegando um módulo
    import algumNomePraFuncao from 'nome_arquivo_com_export.js';

    ligarLuz()
    ```

    - Desse modo, no HTML é apenas chamado 1 arquivo, mas internamente pelo JS, será **carregado de froma assíncrona** (realiza o carregamento de formas paralelas) os outros arquivos que foram chamados pelo `import`.

- Named exports:

  ```JavaScript
  export function desligarLuz() {}

  export function ligarLuz() {}
  ```

  - Sem o uso do `default`, no momento de importar as funções será necessário passar o nome delas igual ao que está declarado aqui.

  ```JavaScript
  import { desligarLuz, ligarLuz as acender } from 'nome_arquivo_com_export.js'
  import * as tudo from 'nome_arquivo_com_export2.js'
  ```

  - É necessário utilizar as chaves, quando não é exportado com `default`.
  - caso queira **alterar o nome** de uma função de um `import` que não foi exportada com `default` pode ser utilizado o `as` e em seguida o nome desejado
  - caso queira exportar tudo, pode ser utilizado `*`.
