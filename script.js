// Generar emojis en pantalla
const emojiList = ["😂", "🥜", "🚀", "🌰", "🎉", "🌎", "🔥", "✨", "🌟"];
const body = document.body;

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

    emoji.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    emoji.style.animationDelay = `${Math.random() * 3}s`; // Retraso aleatorio

    body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove(); // Elimina el emoji después de que termine la animación
    }, 5000);
}

// Genera un nuevo emoji cada 800ms
setInterval(createEmoji, 800);

// Configuración del contador regresivo
const launchDate = new Date("2024-12-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const countdownTimer = document.getElementById("countdown-timer");

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        countdownTimer.innerHTML = "¡El lanzamiento ha comenzado! 🚀🌟";
        countdownTimer.style.color = "#ff6f61";
        countdownTimer.style.fontSize = "2em";
    }
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);


// Captura de correos
const subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    // Validación básica del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert(`¡Gracias por suscribirte, ${email}! 🎉`);
        subscribeForm.reset();
    } else {
        alert("Por favor, introduce un correo electrónico válido.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section-hidden'); // Selecciona todas las secciones ocultas

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección entra en la vista del navegador
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible'); // Agrega la clase para hacerla visible
                observer.unobserve(entry.target); // Deja de observar esta sección
            }
        });
    }, {
        threshold: 0.5 // Se activará cuando al menos el 50% de la sección sea visible
    });

    // Observa cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
});
// Asegúrate de incluir Chart.js en tu proyecto antes de este script
const ctx = document.getElementById('tokenomics-chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Airdrop', 'Liquidez', 'Publicidad y Marketing', 'Desarrollo', 'Tenedores', 'Reserva'],
        datasets: [{
            label: 'Distribución de Tokens',
            data: [15, 20, 10, 25, 15, 15], // Valores porcentuales
            backgroundColor: ['#ff6f61', '#a2c8f2', '#ffb3b3', '#f1c40f', '#2ecc71', '#9b59b6'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});



