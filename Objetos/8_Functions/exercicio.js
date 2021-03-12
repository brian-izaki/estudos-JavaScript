// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('section p')

function contaCaracter(contador, paragrafo) {
  return contador + paragrafo.innerText.length
}
const totalCaracteres = Array.prototype.reduce.call(paragrafos, contaCaracter, 0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newElement(tag, classe, conteudo) {
  const newTag = document.createElement(tag);
  classe ? newTag.classList.add(classe) : null;
  conteudo ? newTag.innerText = conteudo : null;

  return newTag;
}

console.log(newElement('a', 'blue', 'essa é uma tag a'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newH1 = newElement.bind(null, 'h1', 'titulo')
console.log(newH1('titulo 1'))
console.log(newH1('titulo 2'))
console.log(newH1('titulo 3'))