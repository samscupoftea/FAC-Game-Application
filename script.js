

const game = document.querySelector(".gameContent");
let eggs = document.querySelector(".eggs");
let basket = document.querySelector(".basket");
let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
let basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));


function moveBasketLeft() {
    if (basketLeft > 0) {


        basketLeft -= 15;
        basket.style.left = basketLeft + 'px';
    }
}

function moveBasketRight() {
    if (basketLeft < 620) {


        basketLeft += 15;
        basket.style.left = basketLeft + 'px';
    }
}
function control(e) {
    if (e.key == "ArrowLeft") {
        moveBasketLeft();
    }
    if (e.key == "ArrowRight") {
        moveBasketRight();
    }
}


function generateEggs() {
    let eggBottom = 470;
    let eggLeft = Math.floor(Math.random() * 620);
    let egg = document.createElement('div');
    egg.setAttribute("class", "egg");
    eggs.appendChild(egg);

    function eggGravity() {
        eggBottom -= 10;
        egg.style.bottom = eggBottom + 'px';
        egg.style.left = eggLeft + 'px';

    }
    setInterval(eggGravity, 20);
    setTimeout(generateEggs, 2000);

}

generateEggs();

document.addEventListener("keydown", control);