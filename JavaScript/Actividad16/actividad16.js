const selectPar = document.getElementById("colorPar");
const selectImpar = document.getElementById("colorImpar");
const filas = document.querySelectorAll("#tabla tbody tr");

// Cargar colores guardados al iniciar
window.addEventListener("load", () => {
  const colorPar = localStorage.getItem("colorPar") || "white";
  const colorImpar = localStorage.getItem("colorImpar") || "white";

  selectPar.value = colorPar;
  selectImpar.value = colorImpar;

  aplicarColores(colorPar, colorImpar);
});

// Guardar cambios y aplicar colores
selectPar.addEventListener("change", () => {
  localStorage.setItem("colorPar", selectPar.value);
  aplicarColores(selectPar.value, selectImpar.value);
});

selectImpar.addEventListener("change", () => {
  localStorage.setItem("colorImpar", selectImpar.value);
  aplicarColores(selectPar.value, selectImpar.value);
});

// Función para colorear filas
function aplicarColores(colorPar, colorImpar) {
  filas.forEach((fila, index) => {
    if (index % 2 === 0) {
      fila.style.backgroundColor = colorImpar;
    } else {
      fila.style.backgroundColor = colorPar;
    }
  });
}