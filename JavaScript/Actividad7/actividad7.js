function actividad7() {

    let nombre = document.getElementById("nombre").value;

    let provincia = document.getElementById("provincia").value;

    let pueblo = document.getElementById("pueblo").value;

    let frase = nombre + ", eres " + provincia + " de " + pueblo;

    document.getElementById("resultado").innerHTML = frase;
}