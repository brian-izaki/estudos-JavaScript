'use strict'

const carro = 'fusca';

function mostrarCarro() {
  const dentroFuncao = 'ta dentro da funcao'
  console.log(carro)
}

mostrarCarro()
console.log(carro)
// console.log(dentroFuncao)


// bloco var
console.log('com var')
{
  // var vaza do bloco
  var mes = 'Dezembro';
  let mes2 = 'Dezembro';
  const mes3 = 'Dezembro';
  console.log(mes)
}
console.log(mes)
// console.log(mes2)
// console.log(mes3)

// alterando os atributos de um const
const data = {
  dia: 12,
  mes: 'Janeiro',
  ano: 2020
}

data.dia = 10;
console.log(data)

const listaData = [12, 111, 34]
listaData.push(234)
console.log(listaData)

// let
let idade;
idade = 12;
console.log(idade)