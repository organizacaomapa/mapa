document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.first-row');
    let scrollAmount = 0;
    const scrollInterval = setInterval(function() {
        if (window.innerWidth <= 768) { // Activates only on mobile screens
            if(scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollLeft += 10; // Adjust the scrolling speed if necessary
                scrollAmount += 10;
            } else {
                carousel.scrollLeft = 0;
                scrollAmount = 0;
            }
        }
    }, 50); // Adjust the interval time as needed
});
