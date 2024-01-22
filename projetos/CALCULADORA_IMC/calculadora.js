function calcularIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight && height) {
        var imc = weight / (height * height);

        displayResult(imc);
    } else {
        alert("Por favor, preencha peso e altura.");
    }
}

function displayResult(imc) {
    var resultElement = document.getElementById("result");
    var result = "";

    if (imc < 18.5) {
        result = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        result = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        result = "Sobrepeso";
    } else {
        result = "Obesidade";
    }

    resultElement.textContent = `Seu IMC é ${imc.toFixed(2)} - ${result}`;
}
