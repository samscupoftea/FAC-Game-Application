

const game = document.querySelector(".gameContent");
let eggs = document.querySelector(".eggs");
let basket = document.querySelector(".basket");
let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
let basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
let score = 0;
const scoreDisplay = document.querySelector(".score");

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

    let missedEggs = [];

    function eggGravity() {
        if (eggBottom < basketBottom + 50 && eggBottom > basketBottom && eggLeft > basketLeft - 30 && eggLeft < basketLeft + 80) {
            eggs.removeChild(egg);
            score++;
            scoreDisplay.textContent = `Eggs caught: ${score}`;
            clearInterval(fallInterval);


        }
        if (eggBottom < basketBottom && !missedEggs.includes(egg)) {

            missed = true;
            missedEggs.push(egg);
            if (missedEggs.length >= 5) {

                alert("Game Over!");
                clearInterval(fallInterval);
                clearTimeout(eggTimeout);
                location.reload();
            }
        }
        eggBottom -= 5;
        egg.style.bottom = eggBottom + 'px';
        egg.style.left = eggLeft + 'px';

    }
    let fallInterval = setInterval(eggGravity, 20);
    let eggTimeout = setTimeout(generateEggs, 2000);

}

generateEggs();

document.addEventListener("keydown", control);