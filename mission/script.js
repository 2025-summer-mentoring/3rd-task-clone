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