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

const container = document.getElementById("product-list");

datas.map(item => {
  const div = document.createElement("div");
  div.className = "product";

  const priceWithComma = item.price.toLocaleString();

  div.innerHTML = `
  <img src="${item.img}" alt="${item.name}">
  <div class="product-info">
    <div class="product-name">${item.name}</div>
    <div class="product-price">${priceWithComma}원</div>
    <div class="product-date">${item.date}일 전</div>
  </div>
`;

  container.appendChild(div);
});

const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

document.getElementById("sellBtn").addEventListener("click", openModal);
document.getElementById("mystoreBtn").addEventListener("click", openModal);
document.getElementById("talkBtn").addEventListener("click", openModal);
document.getElementById("mystoreBtn2").addEventListener("click", openModal);
document.getElementById("login2Btn").addEventListener("click", openModal);


function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});