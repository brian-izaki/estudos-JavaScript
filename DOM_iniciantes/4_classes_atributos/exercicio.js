// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
  item.classList.add('ativo')
  console.log(item)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item, index) => {
  if (index === 0) {
    return
  }

  item.classList.remove('ativo')
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
  console.log(img, `possui alt: ${img.hasAttribute('alt')}`)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', '#alterado')
console.log(linkExterno)
