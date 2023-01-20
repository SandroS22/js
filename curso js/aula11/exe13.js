let agora = new Date()
let dia = agora.getDay()
console.log(dia)
switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}