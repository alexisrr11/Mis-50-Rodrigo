
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
