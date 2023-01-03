programa
{
	
	funcao inicio()
	{
		// variáveis
		inteiro dia
		inteiro mes
		inteiro ano
		cadeia nome_conferente
		cadeia cliente
		cadeia nome_produto
		cadeia lote
		real peso_unitario
		real tara_unitaria
		cadeia numero_container
		inteiro dia_val
		inteiro mes_val
		inteiro ano_val
		logico paletizado
		inteiro volume_paletes
		inteiro lastros
		inteiro unidades_por_lastros

		real peso_final_total

		//INICIO DO FORMULÁRIO
		escreva("Cadastro de Recebimento\n\n")
		//entrada de dados
		escreva("Digite a data do recebimento: \n"+ "Dia: ")
		leia(dia)
		escreva ("Mês: ")
		leia(mes)
		escreva ("Ano: ")
		leia(ano)
		escreva("Digite o nome completo do conferente: ")
		leia(nome_conferente)
		escreva ("Qual o nome do produto? ")
		leia(nome_produto)
		escreva ("A qual cliente o produto pertence? ")
		leia(cliente)
		escreva("Digite o lote (respeite letras, números e espaços):")
		leia(lote)
		escreva ("Número do Container? ")
		leia(numero_container)
		escreva("Qual o peso de cada unidade? ")
		leia(peso_unitario)
		escreva("Qual a tara de cada unidade? ")
		leia(tara_unitaria)		
		escreva("Digite agora a data de validade: \n"+ "Dia: ")
		leia(dia_val)
		escreva ("Mês: ")
		leia(mes_val)
		escreva ("Ano: ")
		leia(ano_val)
		escreva("A carga chegou paletizada?\nVerdadeiro = sim, falso = não: ")
		leia(paletizado)
		escreva("Se a carga chegou paletizada ou foi paletizada no ato, digite a quantidade de paletes: ")
		leia(volume_paletes)
		escreva("Quantos lastros por palete? ")
		leia(lastros)
		escreva("Quantas unidades do produto por lastro? ")
		leia(unidades_por_lastros)

		//exibição dos resultados
		escreva(""\n"Resumo\n\n")

		escreva("Data do cadastro: "+dia+"/"+mes+"/"+ano+"\n")
		escreva("Conferente: "+nome_conferente+"\n")
		escreva("Cliente "+cliente+"\n")
		escreva("Produto: "+nome_produto+"\n")
		escreva("Lote: "+lote+"\n")
		escreva("Peso por unidade: "+peso_unitario+"\n")
		escreva("Tara: "+tara_unitaria+"\n")
		escreva("Container: "+numero_container+"\n")
		escreva("Data de validade: "+dia_val+"/"+mes_val+"/"+ano_val+"\n")
		escreva("Carga paletizada: "+paletizado+"\n")
		escreva("Norma: "+lastros+"x"+unidades_por_lastros+"\n")
		escreva("Paletes: "+volume_paletes+"\n")
		
		peso_final_total = (peso_unitario * volume_paletes * lastros * unidades_por_lastros)
		escreva (peso_final_total)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1666; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */