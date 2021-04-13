export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = Number(numero.innerText);

      // aumentar a velocidade para chegar no valor.
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        // ao invés de ser 1 em 1, quanto mais alto o total for, maior será o incremento.
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, Math.random() * 25);
    });
  }

  let observer;
  function handleMutation(mutation) {
    const isMutationInClass = mutation[0].target.classList.contains('ativo');
    // console.log(mutation)
    if (isMutationInClass) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}
