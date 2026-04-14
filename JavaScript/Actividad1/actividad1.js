const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const edadInput = document.getElementById("edad");
const btnMostrar = document.getElementById("btnMostrar");
const resultadoDiv = document.getElementById("resultado");

function calcularAnioNacimiento(edad) {
    const anioActual = new Date().getFullYear();
    return anioActual - edad;
}

function mostrarInformacion() {
    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const edad = parseInt(edadInput.value);
    
    if (nombre === "" || apellidos === "" || isNaN(edad) || edad <= 0 || edad > 120) {
        resultadoDiv.innerHTML = "Por favor, introduce todos los datos correctamente. La edad debe ser un numero entre 1 y 120.";
        resultadoDiv.classList.add("mostrar");
        resultadoDiv.style.borderLeftColor = "#dc2626";
        return;
    }
    
    const nombreCompleto = nombre + " " + apellidos;
    const anioNacimiento = calcularAnioNacimiento(edad);
    
    let mensaje = "";
    if (edad >= 18) {
        mensaje = nombreCompleto + " tiene " + edad + " anios y es mayor de Edad";
    } else {
        mensaje = nombreCompleto + " tiene " + edad + " anios y es menor de Edad";
    }
    
    resultadoDiv.innerHTML = "<strong>Nombre:</strong> " + nombreCompleto + "<br>" +
                             "<strong>Año de nacimiento:</strong> " + anioNacimiento + "<br>" +
                             "<strong>" + mensaje + "</strong>";
    resultadoDiv.classList.add("mostrar");
    resultadoDiv.style.borderLeftColor = "#667eea";
}

btnMostrar.addEventListener("click", mostrarInformacion);