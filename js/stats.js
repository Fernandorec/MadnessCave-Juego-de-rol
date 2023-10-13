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
