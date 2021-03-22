function somar(a, b) {
  return a + b;
}
console.log('function declaration', somar(5, 1))



const subtrair = (a, b) => a - b;
console.log('function expression', subtrair(5, 1))



const instrumento = 'bateria';
(function() {
  const instrumento = 'violino';
  console.log('escopo isolado IIFE', instrumento);
})();

console.log('global', instrumento)