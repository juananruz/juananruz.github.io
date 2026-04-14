const bulbImage = document.getElementById("bulbImage");
const toggleBtn = document.getElementById("toggleBulbBtn");
const statusText = document.getElementById("statusText");

let isBulbOn = false;

function updateBulbUI() {
    if (isBulbOn) {
        bulbImage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        toggleBtn.textContent = "Apagar";
        statusText.textContent = "Estado: Encendida";
        statusText.style.backgroundColor = "#fff3cd";
        statusText.style.color = "#856404";
    } else {
        bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        toggleBtn.textContent = "Encender";
        statusText.textContent = "Estado: Apagada";
        statusText.style.backgroundColor = "#f0f0f0";
        statusText.style.color = "#555";
    }
}

function toggleBulb() {
    isBulbOn = !isBulbOn;
    updateBulbUI();
}

toggleBtn.addEventListener("click", toggleBulb);

updateBulbUI();