export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasFuncionamento = funcionamento.dataset.semana.split(',').map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario
    .split(',')
    .map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasFuncionamento.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horarioFuncionamento[0]
    && horarioAgora < horarioFuncionamento[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
