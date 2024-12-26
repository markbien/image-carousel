const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function nextSlide() {
  const currentCard = cards[currentIndex];
  currentCard.classList.remove("active");

  currentIndex++;
  if (currentIndex == cards.length) {
    currentIndex = 0;
  }

  cards[currentIndex].classList.add("active");
}

function prevSlide(){
  const currentCard = cards[currentIndex];
  currentCard.classList.remove("active");

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  cards[currentIndex].classList.add("active");
}

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", nextSlide);

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", prevSlide);