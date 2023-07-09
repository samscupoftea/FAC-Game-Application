// Start my JS by making variables that link to the main game elemtns using DOM. 

const gameContent = document.querySelector(".gameContent");
const basket = document.querySelector(".water");
const egg = document.querySelector(".egg");
const water = document.querySelector(".water");
//Make variables and us parse int to establish the left side and bottom of the basket itself. 
const basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
const basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));

























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











