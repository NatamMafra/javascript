function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var anonascimento = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#resultado') 

    if (anonascimento.value == 0 || anonascimento.value > ano) {
        window.alert ('ERRO! Verifique os dados e tente novamente.')
    } else {
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(anonascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (formsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'imagens/homem-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'imagens/homem-jovem.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute ('src', 'imagens/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute ('src', 'imagens/homem-idoso.png')
            }

        } else if (formsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'imagens/mulher-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute ('src', 'imagens/mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute ('src', 'imagens/mulher-idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
        }
}