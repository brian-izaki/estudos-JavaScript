const carro = {
  marca: "honda",
  ano: 2000,
  cor: "azul",
  personalizacao: {
    arcondicionado: true,
    couro: false,
  },
};

const { marca, ano } = carro;
const { arcondicionado, couro } = carro.personalizacao;

console.log("desestruturado", marca, ano);
console.log("desestruturado objeto do objeto", arcondicionado, couro);

const anime = {
  nome: "one piece",
  anoInicio: 1999,
  estaConcluido: false,
  personagens: {
    capitao: "Luffy",
    navegadora: "Nami",
    medico: "Chopper",
    cozinheiro: "Sanji",
  },
  // semAtributoComValorPadrao: undefined
};

const {
  nome,
  personagens: { capitao, navegadora },
} = anime;

const {
  nome: nomeAnime,
  semAtributo,
  semAtributoComValorPadrao = "valor padrao",
} = anime;

console.log("destruturação aninhada ... ", nome, capitao, navegadora);
console.log("nome de variavel personalizada ... ", nomeAnime);
console.log("atributo que não existe ... ", semAtributo);
console.log("atributo que não existe com valor padrão ... ", semAtributoComValorPadrao);


console.log('*******')

const pokemons = ['Pikachu', 'Bulbassauro', 'Squirtle']

const [ posicao1, posicao2, posicao3 ] = pokemons;

console.log('desestruturar array pokemon 0', posicao1)
console.log('desestruturar array pokemon 1', posicao2)
console.log('desestruturar array pokemon 2', posicao3)


console.log('*******')

function handleClick({ target }) {
  console.log('evento target', target)
}

document.addEventListener('click', handleClick)