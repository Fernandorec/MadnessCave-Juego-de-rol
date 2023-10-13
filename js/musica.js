// batalla song
const audiobata = new Audio("/musica/batallasong.mp3"); // Reemplaza "fondo.mp3" con la ruta de tu archivo de audio
function reproducirAudio() {
  audiobata.play(); // Use "audiobata" instead of "audio"
  audiobata.loop = true; // Reproducir el audio en un bucle
}

function detenerAudio() {
  audiobata.pause();
}

// fairy song
const audioini = new Audio("/musica/Fairys_Fountain.mp3"); // Reemplaza "fondo.mp3" con la ruta de tu archivo de audio
function reproducirAudioini() {
  audioini.play(); // Use "audioini" instead of "audio"
  audioini.loop = true; // Reproducir el audio en un bucle
}

function detenerAudioIni() { // Rename this function to avoid conflicts
  audioini.pause();
}

// batalla song
const audiocalabata = new Audio("/musica/calacap.mp3"); // Reemplaza "fondo.mp3" con la ruta de tu archivo de audio
function reproducirAudiodos() {
  audiocalabata.play(); // Use "audiobata" instead of "audio"
  audiocalabata.loop = true; // Reproducir el audio en un bucle
}

function detenerAudio() {
  audiocalabata.pause();
}