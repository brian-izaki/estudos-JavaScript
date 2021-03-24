// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
// método do window que permite pegar os valores referentes ao elemento HTML
const btnStyles = getComputedStyle(btn); 
const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoInativo, cursoAtivo] = [cursoAtivo, cursoInativo]

console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor)
