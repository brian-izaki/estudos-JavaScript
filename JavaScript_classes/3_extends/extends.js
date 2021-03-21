class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  andar() {
    return 'andou'
  }
}
const pokemonGenerico = new Pokemon('desconhecido', 'desconhecido')
console.log('classe genérica', pokemonGenerico)



console.log('**********')



class PokemonAgua extends Pokemon {
  nadar() {
    return `${this.name} está nadando`
  }
}
const squirtle = new PokemonAgua('squirtle', 'água')
const sentret = new Pokemon('Sentret', 'normal')

try{
  console.log('extends pokemon ... ', squirtle.nadar())
  console.log('extends pokemon ... ', sentret.nadar())
} catch (error) {
  console.log('classe extendida tem nadar', error)
}



console.log('**********')



class PokemonTerra extends Pokemon{
  andar() {
    return 'anda na terra ou pode se esconder nela';
  }
}
const diglet = new PokemonTerra('diglet', 'terra')
console.log('sobrescrita do método andar ... ', diglet.andar())



console.log('**********')


class PokemonFogo extends Pokemon {
  constructor(nome, tipo, ataqueFogo) {
    super(nome, tipo)
    this.ataqueFogo = ataqueFogo
  }

  andar() {
    console.log('super', super.andar())
    return 'andando em fogo'
  }
}

const charmander = new PokemonFogo('charmander', 'fogo', 'lança chamas');
console.log('subclasse com constructor ...', charmander)
console.log('em cima desse tem o método original ...', charmander.andar())

