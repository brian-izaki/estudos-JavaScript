## Anotações Limpar CPF

- foi pego as tags li do html que possuem CPFs não formatados
- Feito uma limpeza neles tirando os pontos e traços
- Adicionado os pontos e traços nos locais corretos de um CPF
  - nesse passo foi utilizado os grupos que são gerados com o regex utilizando os `()` e juntados depois com o formato desejado utilizando as referências a esses grupos com o `$1.$2.$3-$4`
- Depois foi feito a junção das duas funções vistas anteriormente para formatar os textos das tag li.