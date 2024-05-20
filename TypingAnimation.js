// JavaScript to control the typing animation
const text = "SheFashionista";
let index = 0;
const typingAnimation = document.getElementById('typing-animation');

function type() {
  typingAnimation.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(type, 100); 
  }
}

type();