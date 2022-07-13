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
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(marioPosition);
    
    if (pipePosition <= 97 && pipePosition > 0 && marioPosition < 122) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = "none";
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = "img/deadmario.png";
        mario.style.width = "90px";
        mario.style.marginLeft = "3%";

        clearInterval(loop);
    }
}, 10);

document.addEventListener("keydown", jump);