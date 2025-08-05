const slidetrack = document.getElementById("slide-track");

window.addEventListener("DOMContentLoaded", async (event) => {
    const box = document.getElementById('content-items-box');
    datas.map(item => {
        box.innerHTML += `<a class="content-item" data-pid="${item.id}" target="_blank" rel="noopener noreferrer" href="/products/${item.id}">
    <div class="content-item-img">
        <img src="${item.img.substr(1)}" width="194" height="194">
    </div>
    <div class="content-item-content">
        <div class="content-item-title">${item.name}</div>
        <div class="content-item-descbox">
            <div class="content-item-price">${item.price.toLocaleString()}</div>
            <div class="content-item-date"><span>${item.date}일 전</span>
            </div>
        </div>
    </div>
</a>`
    });

    slidetrack.style.transform = 'translate3d(-1024px, 0px, 0px)';
});

const topscroll = document.getElementById("nav-side-item-top");
topscroll.addEventListener("click", () => {
    window.scrollTo(0, 0);
})