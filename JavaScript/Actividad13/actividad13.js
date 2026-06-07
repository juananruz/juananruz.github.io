let tesoroX;
let tesoroY;

let intentos = 0;
let limite = 0;


function iniciarJuego() {

    tesoroX = Math.floor(Math.random() * 10) + 1;

    tesoroY = Math.floor(Math.random() * 10) + 1;

    limite = parseInt(document.getElementById("limiteIntentos").value);

    intentos = 0;

    document.getElementById("resultado").innerHTML =
        "Juego iniciado. Busca el tesoro.";
}


function buscarTesoro() {

    let x = parseInt(document.getElementById("xJugador").value);

    let y = parseInt(document.getElementById("yJugador").value);

    intentos++;

    if (x == tesoroX && y == tesoroY) {

        document.getElementById("resultado").innerHTML =
            "¡Has encontrado el tesoro!";

        return;
    }

    if (intentos >= limite) {

        document.getElementById("resultado").innerHTML =
            "Has perdido. El tesoro estaba en (" +
            tesoroX + "," + tesoroY + ")";

        return;
    }

    let pista = "";

    if (y < tesoroY) {
        pista += "Norte ";
    }

    if (y > tesoroY) {
        pista += "Sur ";
    }

    if (x < tesoroX) {
        pista += "Este ";
    }

    if (x > tesoroX) {
        pista += "Oeste ";
    }

    document.getElementById("resultado").innerHTML =
        "Incorrecto. El tesoro está al " + pista +
        ". Intentos restantes: " + (limite - intentos);
}