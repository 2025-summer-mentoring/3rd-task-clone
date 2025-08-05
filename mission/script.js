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

function slideprev(){
    const activeitem = document.getElementsByClassName('slide-slide-active')[0];
    const index = parseInt(activeitem.getAttribute('data-index'));
    slidemove(index-1);
}

function slidenext(){
    const activeitem = document.getElementsByClassName('slide-slide-active')[0];
    const index = parseInt(activeitem.getAttribute('data-index'));
    slidemove(index+1);
}

function slidemove(id){
    if (slidetrack.style.transition) return;
    const activeitem = document.getElementsByClassName('slide-slide-active')[0];
    slidetrack.style.transition = 'all 0.5s';
    requestAnimationFrame(() => {
        slidetrack.style.transform = `translate3d(-${(id+1)*1024}px, 0px, 0px)`;
        setTimeout(() => {
            slidetrack.style.transition = null;
            const goto = id<=0 ? slidetrack.childElementCount-2 : (id>=slidetrack.childElementCount-2 ? 0 : id);
            requestAnimationFrame(() => { slidetrack.style.transform = `translate3d(-${(goto+1)*1024}px, 0px, 0px)`; });
            activeitem.classList.remove('slide-slide-active');
            const nextitem = document.querySelectorAll(`[data-index='${goto}']`)[0];
            nextitem.classList.add('slide-slide-active');
        }, 500);
    });
}

let autoslide = setInterval(slidenext, 5000);
slidetrack.addEventListener("mouseover", () => {
    clearInterval(autoslide);
});
slidetrack.addEventListener("mouseleave", () => {
    autoslide = setInterval(slidenext, 5000);
});

const scrollprev = document.getElementById("slide-prev");
const scrollnext = document.getElementById("slide-next");
scrollprev.addEventListener("click", slideprev);
scrollnext.addEventListener("click", slidenext);

const category = document.getElementById("nav-bottom-menu");
const categorymenu = document.getElementById("nav-category");
const categoryimg = document.getElementById("nav-bottom-menu-img");
let categoryhover = false;
category.addEventListener("mouseover", () => {
    categorymenu.style.display = 'block';
    categoryimg.src = '../assets/hamburgermenuactive.png';
});

category.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (categoryhover) return;
        categorymenu.style.display = 'none';
        categoryimg.src = '../assets/hamburgermenu.png';
    }, 500);
});

categorymenu.addEventListener("mouseover", () => {
    categoryhover = true;
});

categorymenu.addEventListener("mouseleave", () => {
    categorymenu.style.display = 'none';
    categoryimg.src = '../assets/hamburgermenu.png';
    categoryhover = false;
});

const topscroll = document.getElementById("nav-side-item-top");
topscroll.addEventListener("click", () => {
    window.scrollTo(0, 0);
})