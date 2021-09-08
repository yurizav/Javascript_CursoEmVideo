function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('soltab')
    if(num.value.lenght == 0){
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //NOVIDADE
        while(c <= 10){
            let item = document.createElement('option') //NOVIDADE
            item.text = `${n}x${c}=${n*c}`//NOVIDADE
            item.value = `tab ${c}`//NOVIDADE
            tab.appendChild(item)//NOVIDADE
            c++
        }

    }

}