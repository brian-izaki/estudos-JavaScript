## Parametros e argumentos

- É possível definir um valor padrão pros parãmetros da função.

  ```JavaScript
  function soma(n1, n2 = 0) {
    return n1 + n2
  };

  soma(3) // 3 + 0
  ```

- keyword `arguments`, ele está presente dentro da função e retorna todos os **argumentos** em uma Array like.
  ```JavaScript
  function subtracao(n1, n2) {
    return arguments
  };
  ```

---

## Anotações paremetro Rest

É o uso de `...` antes de um parametro da função, esse representa todos os argumentos passados para a função e cria um array com eles.

```JavaScript
function arrayNumeros(valor1, ...listaNumeros) {
  console.log(valor1)
  return listaNumeros;
}

arrayNumeros(3, 2, 5, 2) // [3, 2, 5, 2]
```

- pode somente ter um rest.
- caso tenha mais de um parametro para função, o rest deve ficar em último.

---

## Anotações spread operator

Parecido com o parametro rest por causa do uso de `...`, porém possui funcionalidade diferente. A diferença é que o `spread` vai iterar o item, percorre cada valor do item da array e adiciona eles no lugar que estiver sendo utilizado o `...`.
```JavaScript
const listaNomes = ['Eduardo', 'Mônica'];
const listaPaticipantes = [...listaNomes, 'Eleanor']
```

- o spread vai adicionar os valores de `listaNomes` dentro da array `listaParticipantes`
- pode ser utilizado o spread para criar uma nova array (arrays like podem se tornar uma array utilizando o `spread`)
