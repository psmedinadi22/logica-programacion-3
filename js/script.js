function calcularFactorial() {
    let numeroInput = document.getElementById('numeroInput').value;
    let numero = parseFloat(numeroInput);

    // Validar si el input es un número
    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = "Error: Por favor, ingresa un número válido.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = "El factorial de " + numero + " es: " + factorial;
}
