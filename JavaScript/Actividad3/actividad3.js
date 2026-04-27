function mostrarEstacion() {
    let n = document.getElementById("numero").value;
    let estacion = "";

    switch (n) {
        case "1":
            estacion = "Invierno";
            break;
        case "2":
            estacion = "Primavera";
            break;
        case "3":
            estacion = "Verano";
            break;
        case "4":
            estacion = "Otoño";
            break;
        default:
            estacion = "Número incorrecto";
    }

    document.getElementById("resultado").innerHTML = "<b>" + estacion + "</b>";
}