  const datas = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/kickboard.png",
    name: "위페드 미니9 전동킥보드",
    price: 1100000,
    date: 3
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/tire.png",
    name: "미쉐린 A급 중고타이어",
    price: 300000,
    date: 1
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/hoodie.png",
    name: "베이프 크롭 녹계 후드 집업",
    price: 336000,
    date: 1
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/bicycle.png",
    name: "언노운 sl82 리어 픽시",
    price: 300000,
    date: 4
  },
  {
    id: 5,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/iphone.png",
    name: "아이폰 16 프로맥스",
    price: 1013000,
    date: 1
  },
  {
    id: 6,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/polo.png",
    name: "90s 폴로 랄프로텐 CALDWELL 쿠바 구아야베 셔츠",
    price: 104000,
    date: 5
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/golf.png",
    name: "브리지스톤 V300-9 아이언세트",
    price: 10200000,
    date: 3
  },
  {
    id: 8,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/gold.png",
    name: "까르띠에 롱드머스트 36미리 금목걸이",
    price: 5300000,
    date: 9
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/bmw.png",
    name: "BMW s1000rr 15년식",
    price: 8300000,
    date: 7
  },
  {
    id: 10,
    img: "https://raw.githubusercontent.com/2025-summer-mentoring/3rd-task-clone/main/assets/victor.png",
    name: "빅터 팬텀 4u",
    price: 180000,
    date: 3
  }
];

  function truncateName(name, limit = 20) {
    return name.length > limit ? name.slice(0, limit) + "..." : name;
  }

  function formatPrice(price) {
    return price.toLocaleString("ko-KR") + " 원";
  }

  const container = document.getElementById("product-container");

  datas.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.border = "1px solid #eee";
    card.style.borderRadius = "6px";
    card.style.overflow = "hidden";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width: 100%; height: 160px; object-fit: cover;" />
      <div style="padding: 12px;">
        <p style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #333;">
          ${truncateName(item.name)}
        </p>
        <div style="display: flex; justify-content: space-between; font-size: 13px; color: #777;">
          <span style="font-weight: 700; color: #000;">${formatPrice(item.price)}</span>
          <span>${item.date}일 전</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });