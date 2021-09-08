function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fano.value.lenght < 1901 || fano.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sex = ''
        if(fsex[0].checked){
            sex = 'Homem'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', '1.hbeb.png')
            } else if ( idade < 25) {
                img.setAttribute('src', '2.hjov.png')
            } else if ( idade < 50) {
                img.setAttribute('src', '3.hadu.png')
            } else {
                img.setAttribute('src', '4.hvel.png')
            }
        } else if (fsex[1].checked){
            sex = 'Mulher'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', '1.mbeb.png')
            } else if ( idade < 25) {
                img.setAttribute('src', '2.mjov.png')
            } else if ( idade < 50) {
                img.setAttribute('src', '3.madu.png')
            } else {
                img.setAttribute('src', '4.mvel.png')
            }
        } else {
            sex = 'Não Identificado'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', '1.gbeb.png')
            } else if ( idade < 25) {
                img.setAttribute('src', '2.gjov.png')
            } else if ( idade < 50) {
                img.setAttribute('src', '3.gadu.png')
            } else {
                img.setAttribute('src', '4.gvel.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sex} com ${idade} anos.`
        res.appendChild(img)
    }
}