
var nota1, nota2, nota3, resultado, tres
window.alert("Eae fi, bom?")
nota1 = parseFloat(prompt("Escreva sua primeira nota no bimestre"))
nota2 = parseFloat(prompt("Escreva sua segunda nota nota no bimestre"))
nota3 = parseFloat(prompt("Escreva sua terceira nota no bimestre"))
resultado = nota1 + nota2 + nota3
tres = resultado / 3
if(tres>=60){window.alert("aprovado, nota: "+tres)}
else if(tres>=40<60){window.alert("Em recuperação, nota: "+tres)}
else{window.alert("reprovado burro: "+tres)}

    