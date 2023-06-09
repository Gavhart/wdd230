const themeToggle = document.querySelector("#theme-toggle");
const mobileToggle = document.querySelector("#mobile-toggle");

themeToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("t-dark");
    themeToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
});

mobileToggle.addEventListener("click", () => {
    mobileToggle.querySelectorAll(".icon").forEach((icon) => {
        icon.classList.toggle("active");
    });
    mobileToggle.parentElement.querySelector(".contents").classList.toggle("open");
});

const thumbnails = document.querySelectorAll('.thumbnails img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.createElement('img');
const lightboxCaption = document.createElement('p');

