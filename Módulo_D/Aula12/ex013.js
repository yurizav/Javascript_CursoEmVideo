var agora = new Date()
var diaSem = agora.getDay()

/* Interpretação
    pelo Javascript:

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

console.log(diaSem)

Eu teria que montar uma estrutura em que if (diaSem == 0) digite domingo,
ou (diaSem == 2) digite terça e etc. Porém, a estrutura switch é perfeita pra esses casos*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
    }
