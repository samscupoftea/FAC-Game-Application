// Use query selector to target the html/DOM of <canvas> that I created within the body of my HTML page. 

const canvas = document.querySelector('canvas');
// Establish that the game space will be in the context of 2 dimensional space as oppose to 3d or something else. 
const c = canvas.getContext('2d');
// The three lines below draws out the canvas width and height using fillRect.
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    //Below is a function called constructor. It takes an object as an argument which include: position, velocity, offset and color.
    constructor({ position, velocity, offset, color = 'red ' }) {

        this.position = position;
        this.velocity = velocity;
        this.width = 80;
        this.height = 50;
        // This last part will come into use once I code the controls for my main basket sprite. 
        this.lastkey;
    }
}