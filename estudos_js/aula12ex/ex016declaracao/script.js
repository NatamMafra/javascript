function preencherdeclaracao () {

    //declaração dasvariáveis de input de dados
    var nomecomp = document.querySelector('input#nome')
    var nome = (nomecomp.value)
    var decnome = document.querySelector ('span#dec-nome')

    var cpfnumber = document.querySelector('input#cpf')
    var cpf = (cpfnumber.value)
    var deccpf = document.querySelector ('span#dec-cpf')

    var rgnumber = document.querySelector('input#rg')
    var rg = (rgnumber.value)
    var decrg = document.querySelector ('span#dec-rg')

    var nomerua = document.querySelector('input#rua')
    var rua = (nomerua.value)
    var decrua = document.querySelector ('span#dec-rua')

    var numerocasa = document.querySelector('input#numero')
    var numero = (numerocasa.value)
    var decnumero = document.querySelector('span#dec-numero')

    var complementocasa = document.querySelector('input#complemento')
    var complemento = (complementocasa.value)
    var deccomplemento = document.querySelector('span#dec-complemento')

    var nomecidade = document.querySelector('input#cidade')
    var cidade = (nomecidade.value)
    var deccidade = document.querySelector('span#dec-cidade')

    var nomeestado = document.querySelector('input#estado')
    var estado = (nomeestado.value)
    var decestado = document.querySelector('span#dec-estado')

    var numerocep = document.querySelector('input#cep')
    var cep = (numerocep.value)
    var deccep = document.querySelector('span#dec-cep')

    var cidaderegistro = document.querySelector('input#cidade-registro')
    var cidadereg = (cidaderegistro.value)
    var deccidaderegistro = document.querySelector('span#dec-cidade-cart')

    //declaração das variáveis de saída de dados na tela de impressão
    decnome.innerHTML = `${nome}`
    deccpf.innerHTML = `${cpf}`
    decrg.innerHTML = `${rg}`
    decrua.innerHTML = `${rua}`
    decnumero.innerHTML = `${numero}`
    deccomplemento.innerHTML = `${complemento}`
    deccidade.innerHTML = `${cidade}`
    decestado.innerHTML = `${estado}`
    deccep.innerHTML = `${cep}`
    deccidaderegistro.innerHTML = `${cidadereg}`

    //declaração das variáveis que usaram informações do sistema
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    var decdia = document.querySelector('span#dec-dia')

    var decmes = document.querySelector('span#dec-mes-ext')

    var decano = document.querySelector('span#dec-ano')

    decdia.innerHTML = `${dia}`
    decano.innerHTML = `${ano}`

    switch (mes) {
        case 0:
            decmes.innerHTML = `janeiro`
            break

        case 1:
            decmes.innerHTML = `fevereiro`
            break

        case 2:
            decmes.innerHTML = `março`
            break
        
        case 3:
            decmes.innerHTML = `abril`
            break

        case 4:
            decmes.innerHTML = `maio`
            break

        case 5:
            decmes.innerHTML = `junho`
            break

        case 6:
            decmes.innerHTML = `julho`
            break

        case 7:
            decmes.innerHTML = `agosto`
            break
    
        case 8:
            decmes.innerHTML = `setembro`
            break
    
        case 9:
            decmes.innerHTML = `outubro`
            break
    
        case 10:
            decmes.innerHTML = `novembro`
            break

        case 11:
            decmes.innerHTML = `dezembro`
            break
    }
    
}