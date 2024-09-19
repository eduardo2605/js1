function converterMoedas() {
    let valorReais = document.getElementById("reais").value;

    const taxaDolar = 5.00; 
    const taxaEuro = 6.00;  

    let valorDolar = (valorReais / taxaDolar).toFixed(2);
    let valorEuro = (valorReais / taxaEuro).toFixed(2);

    document.getElementById("resultado").innerHTML = `USD: $${valorDolar} <br> EUR: €${valorEuro}`;
}