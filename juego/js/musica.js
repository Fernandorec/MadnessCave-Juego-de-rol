// batalla song
const audiobata = new Audio("/musica/batallasong.mp3");
function reproducirAudio() {
  audiobata.play();
  audiobata.loop = true;
}

function detenerAudioBata() {
  audiobata.pause();
}

// fairy song
const audioini = new Audio("/musica/Fairys_Fountain.mp3");
function reproducirAudioIni() {
  audioini.play();
  audioini.loop = true;
}

function detenerAudioIni() {
  audioini.pause();
}

// batalla song2
const audiocalabata = new Audio("/musica/calacap.mp3");
function reproducirAudiodos() {
  audiocalabata.play();
  audiocalabata.loop = true;
}

function detenerAudioCalabata() {
  audiocalabata.pause();
}

// batalla final song
const audiofinal = new Audio("/musica/final.mp3");
function reproducirAudioFinal() {
  audiofinal.play();
  audiofinal.loop = true;
}

function detenerAudioFinal() {
  audiofinal.pause();
}
