document.addEventListener('DOMContentLoaded', function() {
    var slides1 = document.querySelectorAll('#slider .slider-image');
    var slides2 = document.querySelectorAll('#slider-2 .image');
    var currentSlide1 = 0;
    var currentSlide2 = 0;

    function showSlide1(n) {
        slides1[currentSlide1].classList.remove('active');
        currentSlide1 = (n + slides1.length) % slides1.length;
        slides1[currentSlide1].classList.add('active');
    }

    function showSlide2(n) {
        slides2[currentSlide2].classList.remove('active');
        currentSlide2 = (n + slides2.length) % slides2.length;
        slides2[currentSlide2].classList.add('active');
    }

    setInterval(function() {
        showSlide1(currentSlide1 + 1);
        showSlide2(currentSlide2 + 1);
    }, 5000);
});
