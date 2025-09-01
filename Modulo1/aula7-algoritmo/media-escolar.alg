programa
{	
	funcao inicio ()
	{
		real nota1, nota2, media

		escreva ("Informe a nota 1: " )
		leia (nota1)
		escreva( "Informe a nota 2: ")
		leia (nota2)

		media = (nota1+nota2) / 2

		se (media >= 7)
		{ 
			escreva ("Aprovado\n") 
		}
		senao {
			escreva ("Reprovado\n") 
		}
	}
}