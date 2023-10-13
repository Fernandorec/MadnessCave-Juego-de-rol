//Items
// Define el array de pociones
var pocionesDeVida = [
    { nombre: "Poción Menor de Vida", cantidad: 3, curacion: 20 },
    { nombre: "Poción Mayor de Vida", cantidad: 2, curacion: 50 },
    { nombre: "Poción Suprema de Vida", cantidad: 1, curacion: 100 }
];

// Función para usar una poción de vida
function usarPocion(nombrePocion) {
    var pocion = pocionesDeVida.find(function (pocion) {
        return pocion.nombre === nombrePocion;
    });

    if (pocion) {
        if (pocion.cantidad > 0) {
            switch (nombrePocion) {
                case "Poción Menor de Vida":
                    jugadorStats.aumentarVida(pocion.curacion);
                    alert("Has usado una " + nombrePocion + " y recuperaste " + pocion.curacion + " puntos de vida.");
                    break;
                case "Poción Mayor de Vida":
                    // Agregar lógica específica para esta poción si es necesario
                    break;
                case "Poción Suprema de Vida":
                    // Agregar lógica específica para esta poción si es necesario
                    break;
            }
            pocion.cantidad--;
            actualizarInventario();
        } else {
            alert("No tienes más " + nombrePocion + " en tu inventario.");
        }
    } else {
        alert("Poción no encontrada en tu inventario.");
    }
}

// Función para actualizar la cantidad de pociones en el inventario
function actualizarInventario() {
    var inventario = document.getElementById("inventario");
    inventario.innerHTML = "<b>Inventario:</b><br>";

    pocionesDeVida.forEach(function (pocion) {
        inventario.innerHTML += pocion.nombre + ": " + pocion.cantidad + "<br>";
    });
}

// Función para mostrar el inventario
function mostrarInventario() {
    var inventarioDiv = document.getElementById("inventario");
    inventarioDiv.innerHTML = "<b>Inventario:</b><br>";

    pocionesDeVida.forEach(function (pocion) {
        inventarioDiv.innerHTML += pocion.nombre + ": " + pocion.cantidad + " <button onclick=\"usarPocion('" + pocion.nombre + "')\">Usar</button><br>";
    });

    inventarioDiv.style.display = "block";
}

// Llama a la función para actualizar el inventario al cargar la página
actualizarInventario();
