const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
comidas.push('Arroz')
comidas.unshift('Peixe')

console.log(primeiraComida, ultimaComida, comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())
// Inverta a ordem dos estudantes
console.log((estudantes.reverse()))
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
const sectionPorUl = html.split('section').join('ul')
const divPorLi = sectionPorUl.split('div').join('li')
console.log(divPorLi)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopy = carros.slice()
carros.pop()
console.log(carros)
console.log(carrosCopy)
