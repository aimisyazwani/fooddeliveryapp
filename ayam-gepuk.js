const images = document.querySelectorAll('.background-slideshow img');
let currentIndex = 0;

function changeBackground() {
    images[currentIndex].style.opacity = '0';

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].style.opacity = '1';

    setTimeout(changeBackground, 2000); // Change image every 2 seconds
}

changeBackground();
function myFunction(){
    window.location = "menupage.html";
}