// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.body

setInterval(() => {
  body.classList.toggle('vermelho')
}, 4 * 1000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const contador = document.querySelector('[data-tempo]');
const botaoIniciar = document.querySelector('[data-inicio]');
const botaoPausar = document.querySelector('[data-pause]');

let tempo = 0;
let iniciarCronometro;

function startTime() {
  iniciarCronometro = setInterval(() => {
    contador.innerText = tempo
    tempo ++
  }, 1000)
  botaoIniciar.setAttribute('disabled', '')
}

function pauseTime() {
  clearInterval(iniciarCronometro)
  botaoIniciar.removeAttribute('disabled')
}

function resetTime() {
  tempo = 0
  contador.innerText = tempo
}

botaoIniciar.addEventListener('click', startTime)
botaoPausar.addEventListener('click', pauseTime)
botaoPausar.addEventListener('dblclick', resetTime)
