const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('brian')
  } else {
    reject(Error('descrição do erro customizado'))
  }
});
console.log('promessa ... ', promessa)

promessa.then((resolcao) => {
  console.log('then ... ', resolcao)
})


console.log('********')


const promessaTimeout = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) 
    setTimeout(() => {
      resolve({item: 'timeout', tempo: 1000})
    }, 1000)
  else 
    reject(Error('erro no timeout'))
})
console.log('promise timeout ... ', promessaTimeout)


console.log('********')


const retorno = promessaTimeout
  .then((result) => {
    console.log('then do timeout', result)
    result.passouThen = true;
    return result;
  })
  .then(result => {
    console.log('then do then', result)
  })
  .finally(() => {
    console.log('finally com resolve')
    console.log('********')
  })
console.log('retono do then ... ', retorno)


console.log('********')


const promessaRejeitada = new Promise((resolve, reject) => {
  reject(Error('Erro da variavel promessaRejeitada'))
})

promessaRejeitada
  .then(sucesso => {
    console.log('não passou aqui')
  })
  .catch(rejeitado => {
    console.log('catch', rejeitado)
  })
  .finally(() => {
    console.log('finally com reject')
    console.log('********')
  })


console.log('********')


const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado')
  }, 2000)
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 2500)
})

console.log('.all ... ', login, dados)

const tudoCarregado = Promise.all([login, dados])
tudoCarregado.then(resolucao => {
  console.log('.all', resolucao)
  console.log('********')
})
tudoCarregado.then(sucesso => {
  console.log('.all then ', sucesso)
})


const tudoCarregadoRace = Promise.race([login, dados])
tudoCarregado.then(resolucao => {
  console.log('.race', resolucao)
  console.log('********')
})
tudoCarregadoRace.then(sucesso => {
  console.log('.race then ', sucesso)
})
