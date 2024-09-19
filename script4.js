function calcular() {
    let operacao = document.getElementById("operacao").value;
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = valor1 + valor2;
            break;
        case "subtracao":
            resultado = valor1 - valor2;
            break;
        case "multiplicacao":
            resultado = valor1 * valor2;
            break;
        case "divisao":
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Erro: Divisão por zero!";
            }
            break;
        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultado").innerHTML = `O resultado é: ${resultado}`;
}