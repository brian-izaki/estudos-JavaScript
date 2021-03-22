const camada1 = 'camada 1 (escopo global)'

function funcao1() {
  const camada2 = 'camada 2 (escopo da funcao1)'
  console.log('processo de hosting')
  function funcao2() {
    const camada3 = 'camada 3 (escopo da funcao2)'
    console.log('aqui cria uma closure com a função1')
    console.log(camada1)
    console.log(camada2)
    console.log(camada3)
  }
  funcao2()
}
funcao1()

console.log('***********')

function contagem() {
  let total = 0;

  return function incremento(){
    total++;
    console.log(total)
  }
}

const ativarClosure = contagem();
console.log('retorno da contagem', ativarClosure)
ativarClosure()