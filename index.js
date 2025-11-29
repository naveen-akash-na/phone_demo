function showMobileNavOption() {
    let el = document.getElementById("mobile_nav_option");
    el.classList.toggle("hidden");
    el.classList.toggle("flex");
}

const carousel = document.getElementById("carousel");
const slides = carousel.children.length;
let index = 0;

function updateSlide() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("next").onclick = () => {
    index = (index + 1) % slides;
    updateSlide();
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides) % slides;
    updateSlide();
};

setInterval(() => {
    index = (index + 1) % slides;
    updateSlide();
}, 3000);
