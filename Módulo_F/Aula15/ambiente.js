/*
let num = [5,8,2,6,4]
num.push(7, 6, 1)
num[3] = 9
num.length
pos++ <-- LOOPING!!! adiciona+1 cada uso
console.log(num)
for(let pos = 0; pos<num.length; pos++){
    console.log(num[pos])}
*/
let num = [5,8,2,6,4]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if( pos == -1 ) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valos está na posição ${pos}`)
}
