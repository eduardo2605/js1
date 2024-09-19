function calcularMediaPonderada() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
    
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
    
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

    let somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    let somaPesos = peso1 + peso2 + peso3;
    let mediaPonderada = somaNotas / somaPesos;

    alert("A média ponderada é: " + mediaPonderada.toFixed(2));
}

calcularMediaPonderada();