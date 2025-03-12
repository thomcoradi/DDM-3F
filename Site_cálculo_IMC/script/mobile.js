function calc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var temporal = altura * altura;
    var imc = peso / temporal;
    if (imc < 18.5) {
        alert (imc +", Classificação: Baixo Peso.")
    } else if (imc >= 18.5 && imc <= 24.99) {
        alert (imc +", Classificação: Normal.")
    } if (imc >= 25 && imc <= 29.99) {
        alert (imc +", Classificação: Sobrepeso.")
    } else if (imc >= 30) {
        alert (imc +", Classificação: Obesidade")
    };
};