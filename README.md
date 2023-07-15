# EggCatchGame

## Introduction

This is the readme file for **EggCatchGame**, a JavaScript game project developed as part of the 2023 application to FAC bootcamp. The game involves catching falling eggs using a virtual cup controlled by the left and right arrow keys. This document provides an overview of the game, explains the development process, and outlines the motivation behind creating the game.

## Game Summary: Egg And Cup

In **EggCatchGame**, the objective is to catch falling eggs in a cup using the left and right arrow keys. If an egg touches the water without being caught, the game is over. The player's score increases as they catch more eggs, and the player with the highest score is considered the winner.

## Development Process

The game was developed using JavaScript, HTML, and CSS. The following steps were involved in creating **EggCatchGame**:

1. **HTML Structure**: The main game container and element divs were created in HTML to provide the necessary structure for the game.

2. **CSS Styling**: The styling for the page, body, and main game divs was defined in CSS to ensure a visually appealing game interface.

3. **Basket and Water Placement**: The basket and water divs were positioned using CSS, with the water div placed at the bottom of the game content area and styled with a water background image for added visual effect.

4. **Variable Initialization**: Various variables were created using query selectors to access and manipulate game elements.

5. **Basket Movement**: Separate functions were implemented to enable left and right movement of the basket using the arrow keys.

6. **Input Control**: A control function was developed to handle user input through arrow keys and trigger the corresponding basket movement functions.

7. **Egg Generation**: The `makeEggs` function was created to dynamically generate egg elements as child divs within the parent div named "eggs". This involved utilizing `appendChild`, `document.createElement`, and `setAttribute` methods.

8. **Egg Styling**: The egg div was styled using CSS to ensure visual coherence with the game's overall design.

9. **Randomization**: Within the `makeEggs` function, the egg's starting position was randomized across the screen width using the `Math.floor(Math.random() * gameContentWidth)` formula.

10. **Egg Gravity**: An `eggGravity` function was implemented to simulate the falling motion of eggs from the top to the bottom of the game area at a specified speed using intervals and timeouts.

11. **Score Tracking**: A `playerScore` variable was introduced to keep track of the player's score. A corresponding HTML element was created using `document.getElementById('scores')` to display the live score.

12. **Collision Detection**: Currently marked as "TO DO" in the development process, implementing collision detection logic is planned to recognize when an egg is caught by the basket, updating the score accordingly.

13. **Game Over Condition**: The game will end if five or more eggs touch the water. The final score will be displayed at the end of the game.

## Motivation for the Game

The decision to create **EggCatchGame** was motivated by a combination of factors. The developer had previously worked on different game projects, including a Flappy Bird-style game, a complex fighting game, and a variation of Flappy Bird where objects fell from above. However, these projects reached a point where the developer felt limited by the underlying game structures they had established.

Inspiration came from the developer's girlfriend, who shared memories of a childhood game involving catching falling eggs. This sparked the idea of merging the concepts learned from previous projects to create **EggCatchGame**. For instance, the basket movement mechanism from a previous game was repurposed for this project. Similarly, the knowledge of generating randomized elements from the Flappy Bird variation was utilized for egg generation.

Additionally, the developer aimed to improve upon their previous attempts by designing the game with more forethought. They wanted to avoid excessive reliance on CSS and instead handle animations and movements strictly in JavaScript. The inclusion of a live score tracker, egg disappearance upon catching, and collision detection added further complexity and expanded their understanding of JavaScript's capabilities.

## Abandoned Plan

The developer initially considered an alternative approach for creating the game, involving drawing the basket and eggs entirely in JavaScript and utilizing the canvas element as the game content area. However, due to limitations in their JavaScript proficiency, this plan was abandoned in favor of the current implementation.

### Abandoned Plan Steps:

1. **Canvas Creation**: A canvas element would be created in JavaScript to serve as the game display.

2. **Cup Sprite**: A constructor would be used to create a cup sprite, which would be drawn on the canvas using the `fillRect` method.

3. **Event Listeners**: Event listeners for the left and right arrow keys would be implemented to control the cup's movement.

4. **Egg Sprites**: Egg sprites would be added to the game, incorporating a slower fall rate to create the desired gameplay.

5. **Multiple Eggs**: The egg sprites would be duplicated to simulate multiple eggs falling, possibly using `Math.random` to generate starting positions.

## Conclusion

**EggCatchGame** was developed as a JavaScript game project with the aim of combining the concepts learned from previous game projects. By creating a game where players catch falling eggs using a virtual cup, the developer not only utilized their existing knowledge of JavaScript but also improved upon their past experiences. The inclusion of additional features, such as live score tracking and collision detection, further enhanced the game's complexity. Although an alternative plan involving canvas-based rendering was initially considered, the current implementation proved more suitable given the developer's expertise.

Please refer to the project files for the complete implementation and enjoy playing **EggCatchGame**!
