# EggCatchGame
This is my game project for my 2023 application to FAC bootcamp. 
Game Summary: Egg And Cup 

Catch the falling eggs in your cup using the left and right arrow keys. If 5 or more eggs hit the ground it’s game over. The person who can last the longest gains the highest score. 


1. Create main game container and element divs in HTML. 
2. Set the styling of the page, body and main game divs in CSS. 
3. Use styling to place basket and water divs. 
4. Style water Div to be at the bottom of the game content area. Added background image of water to create effect. 
5. Position the basket via CSS to sit on top of the water at the bottom, middle of the game content area. 
6. Create variables for each game div: Using query selector. 
7. Get the left and bottom area's of the basket div by using parseInt and getPropertyValue("Left", "Bottom).
8. Create variable that gets the total width area of the game also using -- parseInt(window.getComputedStyle(gameContent).getPropertyValue("width"));
9. Make seperate functions for moving the basket left and/or right. 
10. Make a third function called controle(e) that uses if statements to tell it if (arrowKeyLeft){
    do left function }
    etc. 
11. Create a function called makeEggs that uses appendChild, document.CreateElement and setAttribute to create a child div within the parent div of "eggs". So under "Eggs" <div>, there will be "Egg" <div>.










Plan: 

1. Create canvas of the game in JS. DONE! 
2. Create cup sprite using constructor and draw () fill.Rect. DONE 
3. Using JS, code in the left and right event listener commands.
4. Now add egg sprite(s). 
5. I know how to key in a form of gravity into a single sprite. However, I will need to key in a slower fall rate. 
6. Figure out a way to duplicate the single sprite eggs so that a number of them are falling. 
7. Perhaps use Math.random in order to generate the ever-changing falling eggs’ starting positions. 



<!------To make the background image completely visible within the .basket element, you can adjust the background-size property. By setting it to cover, the background image will be scaled proportionally to cover the entire container. ----!> 