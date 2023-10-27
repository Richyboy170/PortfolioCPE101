document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    }
});

let slideIndex = 0;
let lastScrollPosition = 0;
const nav = document.querySelector(".nav");
const slideshow = document.querySelector(".slideshow-container");

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 4000);
}

showSlides();

window.onscroll = function() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        navbar.style.transform = "translateY(-100%)";
        slideshow.style.display = "none";
    } else {
        navbar.style.transform = "translateY(0)";
        slideshow.style.display = "block";
    }

    lastScrollPosition = currentScrollPosition;
};
