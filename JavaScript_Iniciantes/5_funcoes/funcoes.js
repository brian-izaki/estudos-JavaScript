// criando e recebendo o parametro lado
function areaQuadrado(lado){
  return lado * lado;
}

// executando e passando o argumento 5
// o retorno é um valor que será armazenado na variavel
var quadrado = areaQuadrado(5)
console.log(quadrado)

// não precisa de parametros
function motivar(){
  return 'Força que você consegue'
}
console.log(motivar())
console.log(motivar)

// exemplo de callback 
const nomeCompleto = sobrenome('', function (nome){
  const isValidName = nome.trim() !== '';
  if (!isValidName)
    return 'sem nome'
})
console.log(nomeCompleto)

function sobrenome(nome, callback){
  nome = callback(nome);
  return `${nome} Izaki`
}

// ESCOPO
const variavelPai = 'Chefe';

function pegaVariavel(){
  const variavelEscondido = 'pessoa escondida'
  return `${variavelPai} foi pego por ${variavelEscondido}`
}

console.log(pegaVariavel());
// console.log(variavelEscondido) // ela está escondida no escopo da funcao


// Hoisting
console.log(naoImportaLugar('casa'))

function naoImportaLugar(lugar, nome = 'julius'){
  return `${nome} vai estar na ${lugar}`
}