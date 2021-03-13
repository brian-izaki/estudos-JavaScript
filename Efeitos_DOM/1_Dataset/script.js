const div = document.querySelector('[data-menu="suave"]')

console.log(Object.prototype.toString.call(div))

div.dataset.adicioneiComJs = 'olha na aba elements e depois no html em baixo do body'

console.log(div.dataset)