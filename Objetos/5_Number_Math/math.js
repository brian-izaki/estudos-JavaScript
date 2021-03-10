console.log('MATH')
console.log('Math objeto', Object.getOwnPropertyNames(Math))


console.log('PI', Math.PI)


console.log('abs', Math.abs(-3))


console.log('ceil', Math.ceil(2.1))
console.log('floor', Math.floor(2.8))
console.log('round', Math.round(2.8))


const sequencia = [5.2, 9, 2, 4, 9.33]
console.log('max', Math.max(...sequencia))
console.log('min', Math.min(...sequencia))


const randomico = Math.random();
console.log('random', randomico)
console.log('random com inteiros', randomico * 5 )
console.log('random com inteiros arredondado', Math.round(randomico * 5) )

