function actividad11() {

    let numero = parseInt(document.getElementById("numero").value);

    let suma = 0;

    for (let i = 0; i <= numero; i++) {

        suma = suma + i;
    }

    document.getElementById("resultado").innerHTML =
        "La suma desde 0 hasta " + numero + " es: " + suma;
}