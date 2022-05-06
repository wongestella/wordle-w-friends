# Wordle W/ Friends
A wordle recreation, where you can now choose your own word to play with friends, as many times as you would like! :)
**Created By: Estella Wong and Selena Wong**

## Problem Motivation
These past few months, we watched Wordle surge in popularity. And, while the word of the day feature is what keeps people coming back, sometimes we just want to play again. Wordle W/ Friends is the solution we created to that exact problem: not only can you play multiple times a day now, but you can, also, play with the people closest to you—your friends and family. 

Create a wordle, share with your friends, and repeat, as many times as you would like. Wordle W/ Friends; a game that unites. Have fun! 

## The Tech Stack
To create this project, we used HTML, CSS, and Javascript. We found that these programming languages gave us the ability to smoothly create, design, and build our Wordle W/ Friends web application as we desired. 

In addition to these programming languages, we also incorporated a variety of libraries, including CryptoJS, AnimateCSS, and SweetAlert 2.

## Specific Features
### The "W/ Friends"
In order to share a link with friends that does not reveal the answer, we ensured to encrypt the word (via CryptoJS) before generating the corresponding link. For the friends solving, the word, on the back end, is decrypted to check for accuracy. 
### Just Like Wordle Itself
Replicating the current structure of Wordle, users can continue guessing the correct word with hints provided along the way (black = letter is never used, yellow = letter is in the wrong location, green = correct letter and location).
### Playing Again, Over & Over
After completing the game shared to you, the player can continue the cycle, and create a new wordle with a word of their choosing. This helps foster a continuous cycle of playing that can users much enjoyment.

## Next Steps
1. One of the greatest challenges we faced during the development process was generating (and, ideally, copying) the link automatically for the user. While our current version has a work around, creating a smoother process for our users is one of next action items.
2. To further the friendly competition among friends, we would like to implement more features to facilitate that. For instance, creating a timer, keeping track of the number of guesses, and creating a composite score friends can compare are all ideas for this next step of advancing the current wordle game. 
3. Updating/improving other current inconsistencies, including animations and keyboard coloring.
