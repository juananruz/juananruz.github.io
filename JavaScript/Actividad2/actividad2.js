const numeroInput = document.getElementById("numero");
const btnComprobar = document.getElementById("btnComprobar");
const resultadoDiv = document.getElementById("resultado");

function comprobarDivisibilidad() {
    const numero = parseInt(numeroInput.value);
    
    if (isNaN(numero) || numero < 1 || numero > 30) {
        resultadoDiv.innerHTML = "Error: Por favor, introduce un numero valido entre 1 y 30.";
        resultadoDiv.classList.add("mostrar");
        return;
    }
    
    if (numero % 2 === 0) {
        resultadoDiv.innerHTML = "El numero " + numero + " es divisible por 2";
    } else {
        resultadoDiv.innerHTML = "El numero " + numero + " NO es divisible por 2";
    }
    
    resultadoDiv.classList.add("mostrar");
}

btnComprobar.addEventListener("click", comprobarDivisibilidad);