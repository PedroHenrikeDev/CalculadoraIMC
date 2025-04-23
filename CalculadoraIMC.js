function calcularIMC() {
    // Pegando os valores do input e convertendo para número
    let valorPeso = parseFloat(document.getElementById("valorPeso").value);
    let valorAltura = parseFloat(document.getElementById("valorAltura").value) / 100; // Convertendo cm para metros

    //Verificar se os valores são válidos
    //isNaN(valorPeso) || isNaN(valorAltura): verifica se algum campo está vazio ou tem caracteres inválidos.
    //valorAltura <= 0 || valorPeso <= 0: impede que o usuário digite um valor negativo ou zero.
    if (isNaN(valorPeso) || isNaN(valorAltura) || valorAltura <= 0 || valorPeso <= 0) { 
        console.log("Erro: valores inválidos.");
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos!";
        return;
    }

    // Cálculo do IMC
    let valorIMC = valorPeso / (valorAltura * valorAltura);

    // Classificação do IMC
    let classificacao = "";
    if (valorIMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC < 25) {
        classificacao = "Peso ideal";
    } else if (valorIMC >= 25 && valorIMC < 30) {
        classificacao = "Sobrepeso";
    } else if (valorIMC >= 30 && valorIMC < 35) {
        classificacao = "Obesidade Grau 1";
    } else if (valorIMC >= 35 && valorIMC < 40) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }

    // Exibir resultado
    //${valorIMC.toFixed(2)}: deixa o IMC sempre com duas casas decimais.
    //${classificacao}: adiciona a categoria do IMC.
    document.getElementById("resultado").textContent = `Seu IMC é ${valorIMC.toFixed(2)} - ${classificacao}`;
}
