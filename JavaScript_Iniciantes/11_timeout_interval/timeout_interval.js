function espera(arg1) {
  console.log(`teste com o ${arg1}`)
}

setTimeout(espera, 1000, 'argumento 1')


setTimeout(() => {
  console.log('teste 2')
}, 2000)


for(let i = 0; i < 5; i++){
  setTimeout(() => {
    console.log(i)
  }, i * 300)
}

const button = document.querySelector('button');

function handleButton() {
  console.log('this do button', this)
  
  setTimeout(function () {
    console.log('this do timeout SEM arrow function', this)
  }, 1000)

  setTimeout(() => {
    console.log('this do timeout COM arrow function', this)
  }, 1000)
}

button.addEventListener('click', handleButton)


let i = 0; 

const intervalo = setInterval((teste) => {
  console.log('setInterval', i++)
  if (i > 5) {
    clearInterval(intervalo)
  }
}, 3000)