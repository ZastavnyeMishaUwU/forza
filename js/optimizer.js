document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
});