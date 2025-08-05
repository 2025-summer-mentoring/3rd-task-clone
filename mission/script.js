const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let index = 0;
const total = images.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

leftBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateSlider();
});

rightBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  updateSlider();
});

setInterval(() => {
  index = (index + 1) % total;
  updateSlider();
}, 5000);