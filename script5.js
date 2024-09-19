function encontrarMaior() {

    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    let maiorValor = Math.max(valor1, valor2, valor3);

    alert(`O maior valor é: ${maiorValor}`);
}

encontrarMaior();
