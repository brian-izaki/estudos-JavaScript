console.log('history', window.history)

// window.history.pushState(null, null, 'sobre.html')

// window.addEventListener('popstate', () => {
//   console.log('evento popstate')
// })

const links = document.querySelectorAll('a')

function replaceContent(newText) {
  const newHtml = document.createElement('div')
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'carregando'
  const pageResponse = await fetch(url)
  const pageText = await pageResponse.text()
  replaceContent(pageText)
}


function handleClick(e) {
  e.preventDefault()
  fetchPage(e.target.href)
  window.history.pushState(null, null, e.target.href)
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href)
})

links.forEach(link => {
  console.log(link)
  link.addEventListener('click', handleClick)
})

