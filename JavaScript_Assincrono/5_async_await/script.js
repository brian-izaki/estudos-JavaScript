async function puxaDados() {
  const responseDados = await fetch('./dados.json')
  const jsonDados = await responseDados.json()

  console.log('await', responseDados)
  console.log('await', jsonDados)
}
puxaDados()



async function puxaDados2() {
  const responseDados = fetch('./dados.json')
  const jsonDados = await (await responseDados).json()

  console.log('await await', responseDados)
  console.log('await await', jsonDados)
}
puxaDados2()