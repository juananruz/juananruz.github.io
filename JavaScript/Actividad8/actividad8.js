function actividad8() {

    let cantidad = parseFloat(document.getElementById("cantidad").value);

    let conversion = document.getElementById("conversion").value;

    let resultado;

    if (conversion == "kmMillas") {

        resultado = cantidad / 1.60934;

        document.getElementById("resultado").innerHTML =
            cantidad + " km son " + resultado.toFixed(2) + " millas";

    } else {

        resultado = cantidad * 1.60934;

        document.getElementById("resultado").innerHTML =
            cantidad + " millas son " + resultado.toFixed(2) + " km";
    }
}