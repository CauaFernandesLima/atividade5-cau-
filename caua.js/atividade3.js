var peso
let pesos = [];
let peso;

// Solicita o peso dos gados até que o peso 0 seja inserido
while (true) {
    peso = parseFloat(prompt("Digite o peso do gado (ou 0 para terminar):"));
    if (peso === 0) break;
    if (peso > 0) {
        pesos.push(peso);
    } else {
        alert("Por favor, insira um peso válido.");
    }
}

// Verifica se a lista de pesos não está vazia
if (pesos.length > 0) {
    let menorPeso = Math.min(...pesos);
    let maiorPeso = Math.max(...pesos);
    let somaPesos = pesos.reduce((acc, val) => acc + val, 0);
    let mediaPesos = somaPesos / pesos.length;

    alert("Peso do menor gado: " + menorPeso);
    alert("Peso do maior gado: " + maiorPeso);
    alert("Média do peso dos gados: " + mediaPesos.toFixed(2));
} else {
    alert("Nenhum peso de gado foi inserido.");
}
