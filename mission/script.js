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
        }, 500
    )
}

category_button.addEventListener("mouseover", hold_category)
category_button.addEventListener("mouseleave", dehold_category)

category_tab.addEventListener("mouseover", hold_category)
category_tab.addEventListener("mouseleave", dehold_category)