
const boton = document.getElementById('boton-clic');
const textoContador = document.getElementById('contador');
const textoTiempo = document.getElementById('tiempo-restante');
const mensajeFinal = document.getElementById('mensaje-final');

const META_CLICS = 100;
const TIEMPO_INICIAL = 30;

let clicsActuales = 0;
let tiempoRestante = TIEMPO_INICIAL;
let juegoIniciado = false;
let juegoTerminado = false;
let intervaloDeTiempo;

boton.addEventListener('mousedown', () => {
    
    if (juegoTerminado) return;

    if (!juegoIniciado) {
        iniciarReloj();
        juegoIniciado = true;
        boton.innerText = "¡DALE!";
    }

    clicsActuales++;
    textoContador.innerText = clicsActuales;

 
    if (clicsActuales >= META_CLICS) {
        finDelJuego(true);
    }
});

function iniciarReloj() {
    
    intervaloDeTiempo = setInterval(() => {
        tiempoRestante--; 
        textoTiempo.innerText = tiempoRestante;

        if (tiempoRestante <= 0) {
            finDelJuego(false);
        }
    }, 1000);
}

function finDelJuego(gano) {
    juegoTerminado = true;
    boton.disabled = true;
    clearInterval(intervaloDeTiempo);

    if (gano) {
        mensajeFinal.innerText = "¡FELICIDADES! Lo lograste a tiempo. 🏆";
        mensajeFinal.className = "ganador"; 
        document.body.style.backgroundColor = "#27ae60";
    } else {
        mensajeFinal.innerText = "¡TIEMPO FUERA! Te faltaron clics. 💀";
        mensajeFinal.className = "perdedor"; 
        document.body.style.backgroundColor = "#c0392b"; 
    }
}