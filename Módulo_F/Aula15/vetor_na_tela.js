let valores = [6,7,5,2,9,4]

valores.sort()

/*console.log(valores)

for(let pos=0; pos< valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/ 

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}