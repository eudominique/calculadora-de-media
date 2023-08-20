// script.js
document.getElementById("calcular").addEventListener("click", function() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    const mediaNotas = (nota1 + nota2 + nota3) / 3;

    var resultado = document.getElementById("resultado");
    if (mediaNotas >= 7) {
        resultado.textContent = "Parabéns, você foi aprovado!";
    } else {
        resultado.textContent = "Infelizmente você reprovou.";
    }

    resultado.textContent += " Sua média é: " + mediaNotas.toFixed(2);
});
