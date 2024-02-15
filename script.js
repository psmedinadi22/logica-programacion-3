function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function obtenerNumero() {
    let numero = prompt("Por favor, ingresa un número para calcular su factorial:");
    numero = parseFloat(numero); // Convertir el input a tipo number

    while (isNaN(numero)) {
        numero = prompt("Error: Por favor, ingresa un número válido:");
        numero = parseFloat(numero);
    }

    return numero;
}

function imprimirResultado(factorial) {
    console.log("El factorial del número ingresado es: " + factorial);

    // document.getElementById("resultado").innerHTML = "El factorial del número ingresado es: " + factorial;
}

function main() {
    let numero = obtenerNumero();
    let factorial = calcularFactorial(numero);
    imprimirResultado(factorial);
}

main();
