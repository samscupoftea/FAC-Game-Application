# **EggCatchGame**

## **Introduction**

This is the readme file for **EggCatchGame**, a JavaScript game project developed as part of my application to the 2023 FAC bootcamp. In this game, you'll have to catch falling eggs using a virtual cup controlled by the left and right arrow keys. This document provides an overview of the game, explains the development process, and outlines my motivation for creating it.

## **Game Summary: Egg And Cup**

In **EggCatchGame**, your goal is to catch falling eggs in your cup. Move the cup left or right using the arrow keys to position it correctly. If an egg touches the water without being caught, the game is over. As you catch more eggs, your score will increase. The player with the highest score is considered the winner.

## **Development Process**

I developed **EggCatchGame** using JavaScript, HTML, and CSS. Here's a breakdown of the steps involved in creating the game:

1. **HTML Structure**: I created the main game container and element divs in HTML to provide the necessary structure for the game.

2. **CSS Styling**: To ensure an appealing game interface, I defined the styling for the page, body, and main game divs using CSS.

3. **Basket and Water Placement**: Using CSS, I positioned the cup and water divs. The water div is placed at the bottom of the game content area and styled with a water background image for a nice visual effect.

4. **Variable Initialization**: I created various variables to access and manipulate game elements using query selectors.

5. **Basket Movement**: I implemented separate functions to enable left and right movement of the cup using the arrow keys.

6. **Input Control**: To handle user input, I developed a control function that responds to arrow key presses and triggers the corresponding cup movement functions.

7. **Egg Generation**: Using the `makeEggs` function, I dynamically generate egg elements as child divs within the parent div named "eggs". This involved utilizing `appendChild`, `document.createElement`, and `setAttribute` methods.

8. **Egg Styling**: I styled the egg div using CSS to ensure it blends well with the overall game design.

9. **Randomization**: Within the `makeEggs` function, I randomized the starting position of each egg across the screen width using the `Math.floor(Math.random() * gameContentWidth)` formula.

10. **Egg Gravity**: I implemented an `eggGravity` function to simulate the falling motion of the eggs from the top to the bottom of the game area. I achieved this using intervals and timeouts to control the speed of the fall.

11. **Collision Detection**: One of the most challenging parts of the development process was implementing collision detection. I used `parseInt(window.getComputedStyle())` and `.getPropertyValue()` to access the left and bottom properties of the cup. By comparing these properties with the egg's position and applying suitable conditions, I could detect collisions between the cup and the egg, as well as when an egg misses the cup and touches the water.

12. **Game Over Condition**: The game ends if five or more eggs touch the water. At the end of the game, your final score will be displayed.

## **Motivation for the Game**

I decided to create **EggCatchGame** based on a combination of factors. I had previously worked on various game projects, including a Flappy Bird-style game, a complex fighting game, and a variation of Flappy Bird where objects fell from above. However, I felt limited by the underlying game structures I had established for those projects.

The motivation for this game came from a childhood memory shared by my girlfriend. She used to play a game where she had to catch falling eggs with a basket. Inspired by her story, I decided to merge the concepts I had learned from my previous projects to create **EggCatchGame**. For example, I repurposed the basket movement mechanism from one of my previous games and utilized my knowledge of generating randomized elements from the Flappy Bird variation.

Additionally, I aimed to improve upon my previous attempts by designing the game with more thoughtfulness. I wanted to minimize reliance on CSS and focus on handling animations and movements strictly in JavaScript. I added features such as live score tracking, egg disappearance upon catching, and collision detection to enhance the gameplay and challenge myself. Through the development process, I expanded my understanding of JavaScript's capabilities and learned how to create more engaging games.

## **Abandoned Plan**

Initially, I considered an alternative approach to create the game by drawing the basket and eggs entirely in JavaScript and utilizing the canvas element as the game content area. However, due to limitations in my JavaScript proficiency, I decided to abandon this plan and pursue the current implementation.

### **Abandoned Plan Steps**:

1. **Canvas Creation**: I planned to create a canvas element using JavaScript to serve as the game display.

2. **Cup Sprite**: I intended to use a constructor to create a cup sprite and draw it on the canvas using the `fillRect` method.

3. **Event Listeners**: I would have implemented event listeners to handle the left and right arrow keys, controlling the cup's movement on the canvas.

4. **Egg Sprites**: I planned to add egg sprites to the game, incorporating a slower fall rate to create the desired gameplay.

5. **Multiple Eggs**: I intended to duplicate the egg sprites to simulate multiple eggs falling. I would have used `Math.random` to generate starting positions for each egg.

## **Conclusion**

I developed **EggCatchGame** as a JavaScript game project with the goal of combining the concepts I had learned from my previous game projects. By creating a first-person game where players catch falling eggs using a virtual cup, I was able to apply my knowledge of JavaScript while also improving upon my past experiences. The addition of features such as live score tracking and collision detection enhanced the complexity and enjoyment of the game. Although I initially considered an alternative plan involving canvas-based rendering, the current implementation proved more suitable given my level of expertise.

Please refer to the project files for the complete implementation, and enjoy playing **EggCatchGame**!
