const preprocessed_data = datas.map((x) => {
    x.img = "." + x.img;
    if (x.name.length > 15) {
        x.name = x.name.slice(0, 16) + "..."; 
    }
    x.price = x.price.toLocaleString('ko-KR');
    x.date = x.date.toString() + "일 전"
    return x;
});


const products = document.getElementById("products");

preprocessed_data.forEach((element) => {
  products.innerHTML += `<article><a href="./">
    <figure style="background-image: url('${element.img}');"></figure>
    <div class="product-explaination">
        <h4 class="product-name">${element.name}</h4>
        <div class="product-detail">
            <p class="price">${element.price} 원</p>
            <p class="upload-date">${element.date}</p>
        </div>
    </div>
</a></article>`;
});

const category_button = document.getElementById("category");
const category_tab = document.getElementsByClassName("categorys")[0];
let category_on = false;

function hold_category() {
    category_on = true;
    category_tab.id = "cateon";
}

function dehold_category() {
    category_on = false;
    setTimeout(() => {
            if (category_on === false) category_tab.id = "";
            console.log(category_on)
        }, 300
    )
}

category_button.addEventListener("mouseover", hold_category)
category_button.addEventListener("mouseleave", dehold_category)

category_tab.addEventListener("mouseover", hold_category)
category_tab.addEventListener("mouseleave", dehold_category)

const move_top = document.getElementById("move-top");
move_top.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

const category_data = [
    "여성의류",
    "남성의류",
    "신발",
    "가방/지갑",
    "시계",
    "쥬얼리",
    "패션 액세서리",
    "디지털",
    "가전제품",
    "스포츠/레저",
    "차량/오토바이",
    "스타굿즈",
    "키덜트",
    "예술/희귀/수집품",
    "음반/악기",
    "도서/티켓/문구",
    "뷰티/미용",
    "가구/인테리어",
    "생활/주방용품",
    "공구/산업용품",
    "식품",
    "유아동/출산",
    "반려동물용품",
    "기타",
    "재능"
]

const category_list = document.getElementById("categorys-list");

category_data.map((x) => {
    category_list.innerHTML += `<li>${x}</li>`;
})