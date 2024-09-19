function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros:"));

const imc = calcularIMC(peso, altura);

const classificacao = classificarIMC(imc);

alert("Seu IMC é: " + imc + "\nClassificação: " + classificacao );