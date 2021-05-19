function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 7 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ea9b72'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#dfc26a'
    }else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0d133f'
    }
}
