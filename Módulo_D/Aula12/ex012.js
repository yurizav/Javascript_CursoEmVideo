var agora = new Date() /*Comando pra pegar horário*/
var hora = agora.getHours()/*Faz com que o sistema pegue o horário do client que o está rodando, seja eu ou não.*/
console.log(`Agora são exatamente ${hora} horas!`)
if (hora < 12) {
    console.log ('Bom Dia!')
} else if (hora <= 18 ) {
    console.log ('Boa Tarde!')
} else {
    console.log('Boa Noite!')
} 
