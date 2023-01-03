programa
{
	
	funcao inicio()
	{
		real valor_inicial
		real porcentagem
		real porcentagem_desconto
		real desconto 
		real juro

		escreva ("Informe o valor: ")
		leia (valor_inicial)

		escreva ("\nInforme a porcentagem: ")
		leia (porcentagem)

		porcentagem_desconto = ((100 - porcentagem) / 100) * valor_inicial
		escreva ("\n"+valor_inicial+" com "+porcentagem+"% de desconto é "+porcentagem_desconto+"\n")

		juro = ((100 + porcentagem) / 100) * valor_inicial
		escreva ("\n"+valor_inicial+" com "+porcentagem+"% de juros é "+juro+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 429; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */