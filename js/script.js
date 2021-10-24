let counter = 0;

let cartCounter = document.querySelector('#cart-counter');

cartCounter.addEventListener('click', () => {
    counter++;
    cartCounter.innerHTML = counter;
});

// document.getElementsById("cart-counter").innerHTML = counter;