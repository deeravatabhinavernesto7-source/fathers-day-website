const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    bgMusic.play();

    musicBtn.innerHTML = "❤️ Music Playing ❤️";
});