const menu = document.querySelector('.menu')

console.log(menu.className)
console.log(menu.classList)

menu.classList.add('ativo')
console.log(menu.classList)

menu.classList.remove('ativo')
console.log(menu.classList)

menu.classList.toggle('toggle')
console.log(menu.classList)
menu.classList.toggle('toggle')


console.log(menu.classList.contains('toggle'))
console.log(menu.classList.contains('menu'))

menu.classList.add('ativo')
menu.classList.replace('ativo', 'trocado')
console.log(menu.classList)

/**
 * Atributos
 */

const animais = document.querySelector('#animais')
console.log('attributes')
console.log(animais.attributes)
console.log(animais.attributes.class)
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img');

console.log(img.getAttribute('src'))
img.setAttribute('alt', 'é uma raposa') // cria ou atualiza
console.log(img)

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)