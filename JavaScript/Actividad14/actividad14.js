function obtenerNumeros() {

    let num1 = parseFloat(document.getElementById("num1").value);

    let num2 = parseFloat(document.getElementById("num2").value);

    return [num1, num2];
}


function sumar() {

    let numeros = obtenerNumeros();

    let resultado = numeros[0] + numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


function restar() {

    let numeros = obtenerNumeros();

    let resultado = numeros[0] - numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


function multiplicar() {

    let numeros = obtenerNumeros();

    let resultado = numeros[0] * numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


function dividir() {

    let numeros = obtenerNumeros();

    let resultado = numeros[0] / numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}