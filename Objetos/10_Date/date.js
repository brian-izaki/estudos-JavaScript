const agora = new Date()
const outroDia = new Date(2020, 11, 30)

console.log('date', agora)
console.log('date', outroDia)

console.log('getUTCHours', agora.getUTCHours())

const futuro = new Date('25 dec 2021')
console.log('getTime', agora.getTime())

const ateNatal = (futuro.getTime() - agora.getTime()) / (24 * 60 * 60 * 1000)

console.log('getTime subtração', Math.floor(ateNatal))
