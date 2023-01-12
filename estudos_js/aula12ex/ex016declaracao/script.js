function preencherdeclaracao () {
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


    decnome.innerHTML = `${nome}`
    deccpf.innerHTML = `${cpf}`
    decrg.innerHTML = `${rg}`
    decrua.innerHTML = `${rua}`
}