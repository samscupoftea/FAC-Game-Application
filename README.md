# Egg In Basket

## Introduction

This is the readme file for **Egg In Basket**, a JavaScript game project developed as part of my application to the 2023 FAC bootcamp. In this game, you'll have to catch falling eggs using a virtual basket controlled by the left and right arrow keys. This document provides an overview of the game, explains the development process, and outlines my motivation for creating it.

## Game Summary: Egg And Basket

In **Egg In Basket**, your goal is to catch falling eggs in your basket. Move the basket left or right using the arrow keys to position it correctly. If an egg touches the water without being caught, the game is over. As you catch more eggs, your score will increase. The player with the highest score is considered the winner.

## Development Process

I developed **Egg In Basket** using JavaScript, HTML, and CSS. Here's a breakdown of the steps involved in creating the game:

1. **HTML Structure**: I created the main game container and element divs in HTML to provide the necessary structure for the game.

2. **CSS Styling**: To ensure an appealing game interface, I defined the styling for the page, body, and main game divs using CSS.

3. **Basket and Water Placement**: Using CSS, I positioned the basket and water divs. The water div is placed at the bottom of the game content area and styled with a water background image for a nice visual effect.

4. **Variable Initialization**: I created various variables to access and manipulate game elements using query selectors.

5. **Basket Movement**: I implemented separate functions to enable left and right movement of the basket using the arrow keys.

6. **Input Control**: To handle user input, I developed a control function that responds to arrow key presses and triggers the corresponding basket movement functions.

7. **Egg Generation**: Using the `makeEggs` function, I dynamically generated egg elements as child divs within the parent div named "eggs". This involved utilizing `appendChild`, `document.createElement`, and `setAttribute` methods.

8. **Egg Styling**: I styled the egg div using CSS to ensure it blends well with the overall game design.

9. **Randomization**: Within the `makeEggs` function, the starting position of each egg was randomized across the screen width using the `Math.floor(Math.random() * gameContentWidth)` formula.

10. **Egg Gravity**: I implemented an `eggGravity` function to simulate the falling motion of the eggs from the top to the bottom of the game area using intervals and timeouts to control the speed.

11. **Collision Detection**: One of the most challenging parts of the development process was implementing collision detection. I used `parseInt(window.getComputedStyle())` and `.getPropertyValue()` to access the left and bottom properties of the basket. By comparing these properties with the egg's position and applying suitable conditions, I could detect collisions between the basket and the egg, as well as when an egg missed the basket and touched the water.

12. **Game Over Condition**: The game ends if a single egg hits the water. At the end of the game, your final score will be displayed.

## Motivation for the Game

I decided to create **Egg In Basket** based on a combination of factors. I had previously worked on various game projects, including a Flappy Bird-style game, a complex fighting game, and a variation of Flappy Bird where objects fell from above. However, I felt limited by the underlying game structures I had established for those projects.

The inspiration for this game came from a childhood memory shared by my girlfriend. She used to play a game where she had to catch falling eggs with a basket. Inspired by her story, I decided to merge the concepts I had learned from my previous projects to create **Egg In Basket**. By repurposing the basket movement mechanism and utilizing my knowledge of generating randomized elements, I aimed to capture the essence of the childhood game while adding my own innovative twist.

Furthermore, I aimed to improve upon my previous attempts by designing the game with more thoughtfulness. I wanted to minimize reliance on CSS and focus on handling animations and movements strictly in JavaScript. I added features such as live score tracking, egg disappearance upon catching, and collision detection to enhance the gameplay and challenge myself. Through the development process, I expanded my understanding of JavaScript's capabilities and learned how to create more engaging games.

## Abandoned Plan

Initially, I considered an alternative approach to create the game by drawing the basket and eggs entirely in JavaScript and utilizing the canvas element as the game content area. However, due to limitations in my JavaScript proficiency, I decided to abandon this plan and pursue the current implementation.

### Abandoned Steps:

1. The game was initially intended to end only after five eggs had hit the water and been missed. I began coding this idea by creating an empty array called `missedEggs` and setting it to 0. Each time an egg would miss, a 'for' loop would trigger from 0 to the length of the missed eggs array, which was initially 5. As it was an empty array, I would push an egg each time a miss occurred. Although I didn't have time to fully implement this feature, it remains an area I would love to explore in the future.

2. The abandoned plan also included the creation of a canvas element using JavaScript to serve as the game display.

3. A constructor was intended to be used to create a basket sprite and draw it on the canvas using the `fillRect` method.

## Conclusion

I developed **Egg In Basket** as a JavaScript game project with the goal of combining the concepts I had learned from my previous game projects. By creating a first-person game where players catch falling eggs using a virtual basket, I was able to apply my knowledge of JavaScript while also improving upon my past experiences. The addition of features such as live score tracking and collision detection enhanced the complexity and enjoyment of the
