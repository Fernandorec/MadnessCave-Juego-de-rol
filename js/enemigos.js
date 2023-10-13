       // Variables de los Pokémon
       var vidaJugador = 50;
       var vidaLadron = 35;
       var ataqueJugador = 10; // Agregamos el ataque del jugador
       var puedePelear = true; // Variable de control para evitar pelear nuevamente

       // Elementos HTML
       var vidaJugadorElement = document.getElementById("vidaJugador");
       var ataqueJugadorElement = document.getElementById("ataqueJugador");
       var vidaLadronElement = document.getElementById("vidaLadron");
       var atacarButton = document.getElementById("atacar");
       var huirButton = document.getElementById("huir");
       var volverButton = document.getElementById("volver"); // Elemento para volver a "index.html"

       // Función para actualizar las estadísticas del jugador
       function actualizarEstadisticas() {
           vidaJugadorElement.textContent = vidaJugador;
           ataqueJugadorElement.textContent = ataqueJugador;
       }

       // Evento para el botón "Atacar"
       atacarButton.addEventListener("click", function() {
           if (!puedePelear) {
               alert("Ya has ganado la batalla. No puedes pelear de nuevo.");
               return; // Evita continuar con la función si no puedes pelear
           }

           // El jugador ataca al ladrón
           var danioJugador = Math.floor(Math.random() * 10) + ataqueJugador; // Genera un número aleatorio entre (ataqueJugador) y (ataqueJugador + 9)

           // Verifica si el ladrón ha sido derrotado
           if (vidaLadron - danioJugador <= 0) {
               vidaLadron -= 0;
               alert("¡Has derrotado al ladrón! Ganaste la batalla.");

               // Incrementa la vida y el ataque del jugador
               vidaJugador += 25;
               ataqueJugador += 5;

               // Desactiva la posibilidad de pelear nuevamente
               puedePelear = false;

               // Actualiza las estadísticas del jugador
               actualizarEstadisticas();

               // Redirige de vuelta a "index.html"
               window.location.href = "index.html";
           } else {
               // El ladrón pierde vida
               vidaLadron -= danioJugador;

               // Turno del ladrón (simulación)
               var danioLadron = Math.floor(Math.random() * 10) + 5; // Genera un número aleatorio entre 5 y 14
               vidaJugador -= danioLadron;

               // Verifica si el jugador ha sido derrotado
               if (vidaJugador <= 0) {
                   vidaJugador = 0;
                   alert("¡El ladrón te derrotó! Perdiste la batalla.");

                   // Desactiva la posibilidad de pelear nuevamente
                   puedePelear = false;
               }

               // Actualiza las estadísticas del jugador y el ladrón
               actualizarEstadisticas();
               vidaLadronElement.textContent = vidaLadron;

               // Verifica si el jugador ha sido derrotado (nuevamente)
               if (!puedePelear) {
                   alert("Ya has perdido la batalla. No puedes pelear de nuevo.");
               }
           }
       });

       // Evento para el botón "Huir" (simulación) - omitido para simplificar

       // Evento para el botón "Volver" (redirige a "index.html")
       volverButton.addEventListener("click", function() {
           window.location.href = "index2.html";
       });

       // Actualiza las estadísticas del jugador al cargar la página
       actualizarEstadisticas();

           if (vidaLadron === 0) {
        // Incrementa la vida y el ataque del jugador
        vidaJugador += 25;
        attack += 5;

        // Almacena la información en el almacenamiento local (localStorage)
        localStorage.setItem("vidaAumentada", true);
    }