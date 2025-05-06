// scripts.js
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items[currentIndex].classList.remove('active');
    currentIndex = (index + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

function showNextItem() {
    showItem(currentIndex + 1);
}

function showPrevItem() {
    showItem(currentIndex - 1);
}

document.querySelector('.carousel-control.next').addEventListener('click', showNextItem);
document.querySelector('.carousel-control.prev').addEventListener('click', showPrevItem);

setInterval(showNextItem, 3000); // Change item every 3 seconds
