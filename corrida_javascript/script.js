const game = document.getElementById("game");
const car = document.getElementById("car");
const obstacle = document.getElementById("obstacle");

// Posição inicial
let carX = 165;
let carY = 800 - 140; // Agora condiz com seu novo CSS

let obsY = -150;
let obsX = Math.random() * 300;

const carSpeed = 10;

// mover carro
function updateCarPosition() {
    car.style.left = carX + "px";
    car.style.top = carY + "px";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && carX > 0) carX -= carSpeed;
    if (e.key === "ArrowRight" && carX < 330) carX += carSpeed;

    updateCarPosition();
});

// LOOP DO JOGO
function gameLoop() {

    // mover obstáculo
    obsY += 6;

    if (obsY > 900) {
        obsY = -120;
        obsX = Math.random() * 300;
    }

    obstacle.style.top = obsY + "px";
    obstacle.style.left = obsX + "px";

    // PEGAR TAMANHOS REAIS
    const carRect = car.getBoundingClientRect();
    const obsRect = obstacle.getBoundingClientRect();

    // COLISÃO REAL E PRECISA
    const colidiu =
        carRect.left < obsRect.right &&
        carRect.right > obsRect.left &&
        carRect.top < obsRect.bottom &&
        carRect.bottom > obsRect.top;

    if (colidiu) {
        alert("GAME OVER!");
        location.reload();
        return;
    }

    requestAnimationFrame(gameLoop);
}

updateCarPosition();
gameLoop();
