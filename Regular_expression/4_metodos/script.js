const regexp = /\w+/gi;

const regexp2 = new RegExp('\\d', 'gi')

const frase = 'JavaScript linguagem 221';

console.log('regexp com // ...', frase.replace(regexp, 'x'))
console.log('regexp usando objeto ...', frase.replace(regexp2, 'x'))

console.log('*******************')

console.log('attr source ... ', regexp.source)
console.log('attr flags ... ', regexp.flags)
console.log('attr global ... ', regexp.global)
console.log('attr multiline ... ', regexp.multiline)

console.log('*******************')

const regexp3 = /a/gi;
console.log('lastIndex', regexp3.lastIndex)
console.log('método test 1', regexp3.test(frase))

console.log('lastIndex', regexp3.lastIndex)
console.log('método test 2', regexp3.test(frase))

console.log('lastIndex', regexp3.lastIndex)
console.log('método test 3', regexp3.test(frase))

console.log('lastIndex', regexp3.lastIndex)
console.log('método test 4', regexp3.test(frase))

console.log('lastIndex', regexp3.lastIndex)


console.log('*******************')


console.log('exec()', regexp3.exec(frase))


console.log('*******************')

const regexp4 = /\w+/g;
const regexp5 = /\w+/;
const frase2 = 'sei que @ nada sei'

console.log('match() na string', frase2.match(regexp4))
console.log('match() na string sem flag g', frase2.match(regexp5))

const regexpGrupos = /(\w+\s){2}@(\s\w+){2}/g

console.log('grupo de captura', frase2.match(regexpGrupos))
console.log('capturados ... ', frase2.replace(regexpGrupos, 'grupo 1 = $1 ... grupo 2 = $2'))