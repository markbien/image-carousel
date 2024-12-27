const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll('.navigation-dots img');
let currentIndex = 0;

function nextSlide() {
  const currentCard = cards[currentIndex];
  currentCard.classList.remove("active");

  const currentDot = dots[currentIndex];
  currentDot.setAttribute('src', '/src/images/dot.png');

  currentIndex++;
  if (currentIndex == cards.length) {
    currentIndex = 0;
  }

  cards[currentIndex].classList.add("active");
  dots[currentIndex].setAttribute('src', '/src/images/dot-active.png');
}

function prevSlide(){
  const currentCard = cards[currentIndex];
  currentCard.classList.remove("active");

  const currentDot = dots[currentIndex];
  currentDot.setAttribute('src', '/src/images/dot.png');

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  cards[currentIndex].classList.add("active");
  dots[currentIndex].setAttribute('src', '/src/images/dot-active.png');
}

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", nextSlide);

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", prevSlide);

document.addEventListener("DOMContentLoaded", function(){
  setInterval(nextSlide, 5000);
});