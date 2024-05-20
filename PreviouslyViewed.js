// JavaScript to control the slideshow in the Previously Viewed container
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelector('.slides');

  if (n > slides.children.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.children.length;
  }

  slides.style.transform = `translateX(${-100 * (slideIndex - 1) / slideIndex}%)`;
}

//To automatically move the images
setInterval(() => plusSlides(1), 3000);