const Pessoa = new Object({
  nome: 'Brian'
})
console.log(Pessoa)

const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou'
  },
  buzinaar() {
    return this.marca + ' buzinou'
  }
}

const honda = Object.create(carro);
honda.marca = 'honda'
console.log('create', honda)
console.log('create', honda.acelerar())
console.log('create __proto__', honda.__proto__)


console.log('********')


const acaoPokemon = {
  atacar() {
    return 'Atacou!!'
  },
  defender() {
    return 'Defendeu!!'
  }
}

const pokemon = {
  nome: 'torterra',
  tipo: 'planta'
}

console.log(acaoPokemon)
console.log(pokemon)
Object.assign(pokemon, acaoPokemon)
console.log('assign', pokemon)


console.log('********')

const heroi = {
  nome: 'batman'
}

Object.defineProperties(heroi, {
  hq: {
    value: 'DC',
    configurable: false, 
    writable: false,
    enumerable: false
  }
})

console.log('defineProperties', heroi)

delete heroi.nome;
delete heroi.hq;
console.log('defineProperties', heroi)


const moto = {
  capacete: true
}

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas
    }, 
    set(valor) {
      this._rodas = valor * 4
    }
  }
})

console.log('defineProperties', moto)
moto.rodas = 2

console.log('defineProperties', moto)


console.log('********')


console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(Array))
console.log('getOwnPropertyDescriptor', Object.getOwnPropertyDescriptor(Array, 'isArray'))


console.log('********')


console.log('keys', Object.keys(Array))
console.log('keys', Object.keys(pokemon))
console.log('values', Object.values(pokemon))
console.log('entries', Object.entries(pokemon))


console.log('********')


console.log('getOwnPropertyNames', Object.getOwnPropertyNames(Array))


console.log('********')


console.log('getPrototypeOf', Object.getPrototypeOf(['banana', 'laranja']))
console.log('getPrototypeOf', Object.getPrototypeOf(''))
console.log('getPrototypeOf', Object.getPrototypeOf(5))


console.log('********')


const frutas = ['laranja', 'limão']
const frutas1 = ['laranja', 'limão']
const citricos = frutas;

console.log('is', Object.is(frutas, frutas1))
console.log('is', Object.is(frutas, citricos))


console.log('********')


const figureAction = {
  akumaNoMi: 'borracha',
  nome: 'Luffy'
}
console.log(figureAction)

Object.seal(figureAction)
figureAction.nome = 'Zoro'
figureAction.anime = 'One piece'
delete figureAction.akumaNoMi;

console.log('seal', figureAction)


console.log('********')


const figureAction2 = {
  akumaNoMi: 'borracha',
  nome: 'Luffy'
}
console.log(figureAction2)

Object.freeze(figureAction2)
figureAction2.nome = 'Zoro'
figureAction2.anime = 'One piece'
delete figureAction2.akumaNoMi;

console.log('freeze', figureAction2)


console.log('********')


const figureAction3 = {
  akumaNoMi: 'borracha',
  nome: 'Luffy'
}
console.log(figureAction3)

Object.preventExtensions(figureAction3)
figureAction3.nome = 'Zoro'
figureAction3.anime = 'One piece'
delete figureAction3.akumaNoMi;

console.log('preventExtensions', figureAction3)


console.log('********')


console.log('isSealed', Object.isSealed(figureAction))
console.log('isFrozen', Object.isFrozen(figureAction2))
console.log('isExtensible', Object.isExtensible(figureAction3))


