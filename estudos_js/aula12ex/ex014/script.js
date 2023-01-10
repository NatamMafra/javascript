

function carregar() {
    var msg = window.document.querySelector('.msg')
    var imagem = window.document.querySelector('#imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 5 && hora < 12) {
        imagem.src = 'imagens/paisagem-manha-redonda.png'
        document.body.style.background = '#74754B'
        msg.innerHTML += ' Bom dia!'
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'imagens/paisagem-tarde-redonda.png'
        document.body.style.background = '#4E2C44'  
        msg.innerHTML += ' Boa tarde!.'      
    } else {
        imagem.src = 'imagens/paisagem-noite-redonda.png'
        document.body.style.background = '#393C5C'   
        msg.innerHTML += ' Boa noite!'     
    }


}