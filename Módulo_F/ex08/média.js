let num = document.querySelector('input#fnum') // Na vdd, não entendi porra nenhuma nesse Javascript
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100)
        return true//Não entendi nem essa nem a de baixo, pq true? oq muda é o booleano???
    }

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Ínválido, ou já presente na Lista!')
    }
    num.value = '' // Limpa o valor no input após usar!
    num.focus() //Como se clicasse com o mouse no input, estando certo ou errado!
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else { //Não entendi nada nesse else também
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0 
        let média = 0

        for (let pos in valores) { // revisar isso tudo, n entendi nada!!!
            soma += valores[pos] //Não entendi essa porra, na vdd não entendi nada desse if
            if (valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos] < menor)
                menor = valores[pos]
        }
        //div res
        média += soma / total // pq +=? oq quer dizer valores[pos]? concatenação ? WTF???
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados!</p>`
        res.innerHTML += `<p>O menor valor foi ${menor} !</p>`
        res.innerHTML += `<p>O maior valor foi ${maior} !</p>`
        res.innerHTML += `<p>Somando os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${média}</p>`

    }
}

    /*
    let item = document.createElement('option') //NOVIDADE
    tab.appendChild(item)
    c++
    */
