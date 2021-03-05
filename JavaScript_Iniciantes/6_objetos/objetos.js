// criação de um objeto
var objeto = {
  nome: 'Brian',
  idade: 20,
  estudante: false
}

// propriedade e métodos
var quadrado = {
  lados: 4,
  area(lado){
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados
  }
}

console.log((quadrado.perimetro(12)))


// acessar uma propriedade 
console.log(objeto.nome)

// adicionar uma propriedade
objeto.estadoCivil = 'namorando'
console.log(objeto.estadoCivil)


// THIS
var vidaDeXadrez = {
  rei: 'rei',
  dama(){ return this.rei + ' casado com Dama'},
  peao: {
    dama(){ return this.rei + ' casado com Dama'},
    rei: 'ainda peao',
  }
}

console.log(vidaDeXadrez.dama())
console.log(vidaDeXadrez.peao.dama())


// herança  
// hasOwnProperty não está definido em vidaDeXadrez mas, está definida na classe Object.
console.log(vidaDeXadrez.hasOwnProperty('rei'))