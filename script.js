// // Start my JS by making variables that link to the main game elemtns using DOM. 

// const gameContent = document.querySelector(".gameContent");
// const basket = document.querySelector(".water");
// const egg = document.querySelector(".egg");
// const water = document.querySelector(".water");
// //Make variables and us parse int to establish the left side and bottom of the basket itself. 
// const basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
// const basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));


// function moveBasketLeft() {
//     basketLeft -= 15;
//     basket.style.left = basketLeft + 'px';


// }
// function moveBasketRight() {
//     basketRight += 15;
//     basket.style.left = basketRight + 'px';
// }

// function control(e) {
//     if (e.key == "ArrowLeft") {
//         moveBasketLeft();
//     }
//     if (e.key == "ArrowRight") {
//         moveBasketRight();
//     }
// }

// document.addEventListener("keydown", control);



const gameContent = document.querySelector(".gameContent");
const basket = document.querySelector(".basket");
const eggs = document.querySelector(".eggs");
const water = document.querySelector(".water")

//Implement dynamic player score

let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
let basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
let waterTop = parseInt(window.getComputedStyle(water).getPropertyValue("value"));
//Get the game width using parseInt 
const gameContentWidth = parseInt(window.getComputedStyle(gameContent).getPropertyValue("width"));
//Set starting score for both catching eggs and eggs that are missed. 
let score = 0;
//Get score display 
const scoreDisplay = document.querySelector(".score");
// Function for moving the basket left. 
function moveBasketLeft() {
    if (basketLeft > 0) {
        basketLeft -= 15;
        basket.style.left = basketLeft + 'px';
    }
    updateBasketPosition();
}
//Functions for moving the basket right 
function moveBasketRight() {
    const basketWidth = parseInt(window.getComputedStyle(basket).getPropertyValue("width"));
    if (basketLeft < gameContentWidth - basketWidth) {
        basketLeft += 15;
        basket.style.left = basketLeft + 'px';
    }
    updateBasketPosition();
}


//Function for updating left and bottom basket positions each time left or right key has been invoked. 
function updateBasketPosition() {
    basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
    basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
}

//Function for controlling the the basket. 
function control(e) {
    if (e.key === "ArrowLeft") {
        moveBasketLeft();
    }
    if (e.key === "ArrowRight") {
        moveBasketRight();
    }
}
//Created variable for missed that starts at the integer 0. 
let missed = 0;

let waterBottom = 700;

// Function called makeEggs that creates a div child element within the parent element of eggs.
function makeEggs() {
    // Added eggBottom and Egg left. Egg left is equal to math.random * the width of the screen. This means that the egg generates randomly across the top width of the game area. 
    let eggBottom = 600;

    let eggLeft = Math.floor(Math.random() * (gameContentWidth - 100) + 100)
    console.log(gameContentWidth);


    let egg = document.createElement('div');
    egg.setAttribute("class", "egg");
    eggs.appendChild(egg);

    function eggGravity() {
        const basketWidth = parseInt(window.getComputedStyle(basket).getPropertyValue("width"));
        const basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        if (eggBottom < basketBottom + 50 && eggBottom > basketBottom && eggLeft > basketLeft - 30 && eggLeft < basketLeft + 80) {
            if (egg.parentNode === eggs) {
                eggs.removeChild(egg);
                score++;
                scoreDisplay.textContent = `Eggs caught: ${score}`
            }
            // MAYBE DELETE OR CHANGE? 
            if (eggBottom < basketBottom && eggBottom >= basketBottom - 5) {
                eggs.removeChild(egg);
                missed++;
                if (missed >= 5) {
                    alert("Game Over");
                }
            }
        }
        console.log("hit" + missed);

        // function clearEggs() {
        //     if (eggBottom <= basketBottom) {
        //         eggs.removeChild(egg);


        //     }
        // }






        // function missedEggs (eggBottom < basketBottom) {

        //     if (missed >= 5) {
        //         alert("Game over");
        //     } else {
        //         missed++;
        //     }



        // alert("Game over");

        eggBottom -= 5;
        egg.style.bottom = eggBottom + 'px';

    }
    // Starts the gravity functons and therefore the game. 
    setInterval(eggGravity, 20);
    setTimeout(makeEggs, 3000);
    egg.style.bottom = eggBottom + 'px';
    egg.style.left = eggLeft + 'px';
}
//Starts the make eggs functions. 
makeEggs();

document.addEventListener("keydown", control);













// // Use query selector to target the html/DOM of <canvas> that I created within the body of my HTML page. 

// const canvas = document.querySelector('canvas');
// // Establish that the game space will be in the context of 2 dimensional space as oppose to 3d or something else. 
// const c = canvas.getContext('2d');
// // The three lines below draws out the canvas width and height using fillRect.
// canvas.width = 1024
// canvas.height = 576


// c.fillRect(0, 0, canvas.width, canvas.height);



// class Sprite {
//     //Below is a function called constructor. It takes an object as an argument which include: position, velocity, offset and color.
//     constructor(position) {
//         this.position = position

//     }


//     draw() {
//         c.fillStyle = 'brown';
//         c.fillRect(this.position.x, this.position.y, 80, 50)
//     }
// }

// const player = new Sprite({
//     x: 480,
//     y: 505,
// })

// player.draw()

// console.log(player);

// function movePlayerLeft() {
//     PlayerLeft -= 15;
// }











