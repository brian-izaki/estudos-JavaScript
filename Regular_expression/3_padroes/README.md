## Anotações da aula

- Validações: 
  - **CEP** com os seguintes padrões:
    - **00000-000; 00000 000; 00000000**
    - pode ser utilizado o seguinte regexp `/\d{5}[\s-]?\d{3}/g`
      - o uso do `[]` serve para dizer que pode ser um traço (`-`) ou um espaço (`\s`) naquela posição da string (5ª posição, inicia com índice zero)
      - A `?` serve para tornar o espaço (`\s`) e o traço (`-`) em opcional, ou seja, não precisa ter eles na string, este é para o 3º padrão pedido (00000000).

  - **CPF** com os seguintes padrões:
    - **000.000.000-00; 000-000-000-00; 000.000.000.00; 000000000-00; 00000000000**
    - pode ser utilizado o seguinte regexp `/(?:\d{3}[.-]?){3}\d{2}/g`
      - o uso do `()` serve para agrupar aquele padrão e poder utilar ele mais 3 vezes (`{3}`), evitando repetição de escrita.
      - Como nesse caso não é desejado grupos, é utilizado o `?:` para que não crie nenhum grupo dentro do `()`.

- **CNPJ** com os seguintes padrões:
  - **00.000.000/0000-00; 00000000000000; 00-000-000-0000-00; 00.000.000/000000; 00.000.000.000000; 00.000.000.0000.00**
  - pode ser utilizado o seguinte regexp `/\d{2}(?:[\.-]?\d{3}){2}\/?\d{4}[-.]?\d{2}/g`
    - O trecho com `(?:[\.-]?\d{3}){2}` foi utilizado para não repetir a mesma expressão, e também o uso do `?:` para não forma grupos, pois não há necessidade.
    - a parte com `\/` serve para dar um scape no `/` pois ele serve para abrir e fechar uma regex, mas neste caso, quero utilizar ele na forma literal.
    - os outros trechos são para quantificar digitos, ou selecionar entre opções como `/ . -`.

- _Não é um regexp que vai validar 100% dos casos, pode ser que seja necessário alterar algo especifico dependendo do caso._