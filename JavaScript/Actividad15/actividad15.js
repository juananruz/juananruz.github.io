let agenda = new Map();


function agregarUsuario() {

    let nombre = document.getElementById("nombre").value;

    let dni = document.getElementById("dni").value;

    agenda.set(dni, nombre);

    document.getElementById("resultado").innerHTML =
        "Usuario añadido correctamente";
}


function mostrarUsuarios() {

    let texto = "";

    for (let [dni, nombre] of agenda) {

        texto += "Nombre: " + nombre +
                 " - DNI: " + dni + "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}