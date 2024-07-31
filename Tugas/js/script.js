let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function startSlideshow() {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Ubah gambar setiap 3 detik
}

document.addEventListener('DOMContentLoaded', startSlideshow);
