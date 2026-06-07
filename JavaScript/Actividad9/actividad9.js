function actividad9() {

    let texto = document.getElementById("texto").value;

    let caracteres = texto.length;

    document.getElementById("resultado").innerHTML =
        "La cadena tiene " + caracteres + " caracteres";
}