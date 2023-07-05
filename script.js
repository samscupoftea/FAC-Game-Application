// Use query selector to target the html/DOM of <canvas> that I created within the body of my HTML page. 

const canvas = document.querySelector('canvas');
// Establish that the game space will be in the context of 2 dimensional space as oppose to 3d or something else. 
const c = canvas.getBoundingClientRect('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);