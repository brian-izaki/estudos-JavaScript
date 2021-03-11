// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const listaCurso = Array.from(document.querySelectorAll('.curso'))

const listaCursoDados = listaCurso.map(curso => {
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = Number(curso.querySelector('.aulas').innerText)
  const horas = Number(curso.querySelector('.horas').innerText)
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(listaCursoDados)



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100 = numeros.filter(numero => numero > 100)
console.log(maiores100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some(instrumento => instrumento === 'Baixo'))

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, compra) => {
  const preco = Number(compra.preco.replace('R$ ', '').replace(',', '.').trim())

  
  return acumulador + preco
}, 0)

console.log(totalCompras)