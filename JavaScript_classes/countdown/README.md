## Anotações sobre o countdown

É uma classe para contagem do tempo atual até um tempo futuro que é especificado pelo usuário.

- Lógica utilizada:
  - Um tempo futuro (dia e hora atual pra frente) é especificado.

  - esse tempo é converttido com `.getTime()` dentro da classe, assim obtendo um *valor em milissegundos* desde a data de 1 de janeiro de 1970 para a sua data atual, e outra para a data futura.

  - é subtraído o tempo futuro com o tempo atual (retorno em milisegundos).

  - o valor resultante em milisegundos pode ser convertido em segundos dividindo por 1000, o mesmo ocorre para minutos, horas e dias com seus valores respectivos para conversão (veja no código).

  - Conseguido os tempos, agora é criado um método que irá retornar um objeto com esses tempos definidos.
    - os tempos por estarem definidos de acordo com o valor da subtração (tempo cheio), horas, minutos e segundos estão com o tempo de dias juntos, mas para pegar apenas seus valores respectivos, é utilizado o operador de módulo (`%`) pelo valor que eles representem (para segundo e minuto 60, hora 24), pois quando se tem 60 / 60, o resto é zero, mas quando tem 61 / 60, o resto é 1.