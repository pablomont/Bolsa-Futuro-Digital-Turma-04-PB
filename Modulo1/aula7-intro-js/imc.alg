programa
{	
	funcao inicio ()
	{
		real massa, altura, imc

		escreva ("Informe sua massa: " )
		leia (massa)
		escreva( "Informe sua altura: ")
		leia (altura)

		imc = massa / (altura * altura)
        escreva("Seu IMC é: ", imc)
        escreva("\n")

		se (imc > 25)
		{ 
			escreva ("IMC ACIMA DO NORMAL\n") 
		}
		senao {
            escreva("IMC NORMAL")
		}
	}
}