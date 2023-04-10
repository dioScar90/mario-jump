const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", '');

    console.log(marioPosition);
    
    if (pipePosition <= 97 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "img/deadmario.png";
        mario.style.width = "90px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }

    if (pipePosition < -25 || pipePosition > -50) {
        const placar = document.querySelector("#placar");
        let placarNumero = +placar.innerHTML.trim();
        placar.innerHTML = ++placarNumero;
    }
}, 10);

document.addEventListener("keydown", jump);