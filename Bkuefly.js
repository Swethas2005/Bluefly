document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slider-image');
    var currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});
