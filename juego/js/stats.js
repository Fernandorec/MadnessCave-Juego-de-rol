class JugadorStats {
    constructor() {
        this.vida = 50;
        this.ataque = 5;
        this.vidaMaxima = 100; // Valor máximo de vida
    }

    aumentarAtaque(valor) {
        this.ataque += valor;
    }

    aumentarVida(valor) {
        // Asegura que la vida no supere el valor máximo
        this.vida = Math.min(this.vida + valor, this.vidaMaxima);
    }
}

//pociones
//pociones
// Función para usar una poción de vida

var pocionMenor = {
    nombre: "Poción Menor de Vida",
    curacion: 20,
    cantidad: 4 // Ejemplo: cantidad inicial de 5 pociones
};

var pocionMayor = {
    nombre: "Poción Mayor de Vida",
    curacion: 50,
    cantidad: 3 // Ejemplo: cantidad inicial de 3 pociones
};


function usarPocion() {
    var opcion = prompt("¿Qué poción deseas usar: Poción Menor de Vida (1) o Poción Mayor de Vida (2)?");

    switch (opcion) {
        case "1":
            if (pocionMenor.cantidad > 0) {
                alert("Tu vida ha aumentado en 20 puntos");
                jugadorStats.aumentarVida(pocionMenor.curacion);
                pocionMenor.cantidad--;

                // Actualiza la vida del jugador en la interfaz gráfica
                document.getElementById("vidaJugador").textContent = jugadorStats.vida;
            } else {
                alert("No tienes pociones menores de vida.");
            }
            break;

        case "2":
            if (pocionMayor.cantidad > 0) {
                alert("Tu vida ha aumentado en 50 puntos");
                jugadorStats.aumentarVida(pocionMayor.curacion);
                pocionMayor.cantidad--;

                // Actualiza la vida del jugador en la interfaz gráfica
                document.getElementById("vidaJugador").textContent = jugadorStats.vida;
            } else {
                alert("No tienes pociones mayores de vida.");
            }
            break;
        default:
            break;
    }
}



//fin pociones
//fin pociones






var jugadorStats;

if (!localStorage.getItem("vida") || !localStorage.getItem("ataque")) {
    // Si no están en el LocalStorage, inicializa las estadísticas del jugador
    jugadorStats = new JugadorStats();

    // Guarda las estadísticas iniciales en el LocalStorage
    localStorage.setItem("vida", jugadorStats.vida);
    localStorage.setItem("ataque", jugadorStats.ataque);
} else {
    // Si las estadísticas ya están en el LocalStorage, recupéralas y actualiza la instancia de jugadorStats
    jugadorStats = new JugadorStats();
    jugadorStats.vida = parseInt(localStorage.getItem("vida"));
    jugadorStats.ataque = parseInt(localStorage.getItem("ataque"));
}

window.jugadorStats = jugadorStats;
