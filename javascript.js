function actualizarCuentaRegresiva() {
    let fechaObjetivo = new Date("2025-08-02T20:00:00-03:00").getTime();
    let ahora = new Date().getTime();
    let tiempoRestante = Math.floor((fechaObjetivo - ahora) / 1000);

    if (tiempoRestante > 0) {
        let dias = Math.floor(tiempoRestante / (24 * 60 * 60));
        let horas = Math.floor((tiempoRestante % (24 * 60 * 60)) / 3600);
        let minutos = Math.floor((tiempoRestante % 3600) / 60);
        let segundos = tiempoRestante % 60;

        document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
        document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
        document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    } else {
        document.querySelector(".cuenta-regresiva").innerHTML =
            "<h4>¡Felices cumpleaños Rodrigo!</h4><br><h4>¡Te deseamos lo mejor en este día tan especial!</h4>";
        clearInterval(intervalo);
    }
}

let intervalo = setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();



const musicIcon = document.querySelector('.bxs-music');
const music = document.querySelector('#music');

musicIcon.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicIcon.style.color = "var(--color-primary)";
        musicIcon.style.border = "3px solid var(--color-primary)";
    } else {
        music.pause();
        music.currentTime = 0;
        musicIcon.style.color = "var(--color-secondary)";
        musicIcon.style.border = "3px solid var(--color-secondary)";
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("ver");
    const nuevoTextoElemento = document.getElementById("nuevoTxtVer");
    const textoAMostrar = "Look fiestero.. Venite cómodo, que se baila toda la noche.💃🏻🕺🏻";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50);
    }

    boton.addEventListener("click", () => {
        escribirTexto(nuevoTextoElemento, textoAMostrar);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("CBU");
    const NCBUElemento = document.getElementById("N°CBU");
    const aliasElemento = document.getElementById("Alias");

    const textoCBU = "Ups... Llegaste tarde 🎶";
    const textoAlias = "¡La playlist ya está cerrada!";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50);
    }

    boton.addEventListener("click", () => {
        escribirTexto(NCBUElemento, textoCBU);
        setTimeout(() => {
            escribirTexto(aliasElemento, textoAlias);
        }, textoCBU.length * 50);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".efect");

    const observar = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observar.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => observar.observe(element));
});
