//pegando elementos do HTML
const game= document.getElementById("game");
const car= document.getElementById("car");
const obstacle= document.getElementById("obstacle");

let carX= 130; 
const carSpeed= 5; 
let obsY= -100; 
let obsX= Math.random()*260; 

//movendo o carro
document.addEventListener("keydown", (e) =>{
    if (e.key === "ArrowLeft" && carX > 0){
        carX -= carSpeed;
    }
    if (e.key === "ArrowRight" && carX < 260){
        carX += carSpeed;
    }
    car.style.left = carX + "px";  
})

function gameLoop(){
    obsY += 4; 

    if (obsY > 500){
        obsY = -60;
        obsX = Math.random()*260;  
    }

    obstacle.style.top = obsY + "px";
    obstacle.style.left = obsX + "px";

    // Colisão
    const carRect = car.getBoundingClientRect();
    const obsRect = obstacle.getBoundingClientRect();

    if (
        carRect.left < obsRect.right &&
        carRect.right > obsRect.left &&
        carRect.top < obsRect.bottom &&
        carRect.bottom > obsRect.top
    ) {
        alert("GAME OVER!");
        location.reload();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
