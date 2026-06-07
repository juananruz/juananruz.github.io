const recetas = [
    { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate, aceite, pan" },

    { id: 2, nombrereceta: "Gachas", ingredientes: "harina, agua, azucar" },

    { id: 3, nombrereceta: "Migas", ingredientes: "pan, ajo, aceite" }
];


function mostrarRecetas() {

    let tabla = `
    
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre Receta</th>
            <th>Ingredientes</th>
        </tr>
    `;

    for (let i = 0; i < recetas.length; i++) {

        tabla += `
        
        <tr>
            <td>${recetas[i].id}</td>
            <td>${recetas[i].nombrereceta}</td>
            <td>${recetas[i].ingredientes}</td>
        </tr>
        `;
    }

    tabla += `</table>`;

    document.getElementById("tablaRecetas").innerHTML = tabla;
}