function acaoBotao() {
	var nome, idade, limite, contador
	limite = prompt("Digite o valor de vezes que vai ser verificado")
	contador = 0 
	while(contador < limite){
		nome = prompt ("Digite o seu nome")
		idade = prompt ("Digite a idade do(a)" + nome)
		if ( idade > 18 )
			document.getElementById("paragrafo").innerText = nome + "Você é maior de idade"
		else
			document.getElementById("paragrafo").innerText = nome + "Você é menor de idade"
			contador++
	}
}
