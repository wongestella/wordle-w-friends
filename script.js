import { ALLWORDS } from "./allwords.js";

const GUESS_COUNT = 6;
let guess_left = GUESS_COUNT;
let curr_guess = [];
let next_letter = 0;
let correct_word = ALLWORDS[Math.floor(Math.random() * ALLWORDS.length)];

// will print out the correct word just incase we need to debug
console.log(correct_word);

function createBoard(){
    let board = document.getElementById("board");

    for (let i=0; i < GUESS_COUNT; i++) {
        let row = document.createElement("div");
        row.className = "word-row";

        for (let j = 0; j < 5; j++) {
            let letter_box = document.createElement("div");
            letter_box.className = "letter-box";
            row.appendChild(letter_box);
        }

        board.appendChild(row);
    }
}

/**
 * deleteLetter
 * 
 * if the player wants to delete a letter they just typed, this function will be called
 */
function deleteLetter() {
    let curr_word = document.getElementsByClassName("word-row")[6 - guess_left];
    let box = curr_word.children[next_letter - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    curr_guess.pop();
    next_letter -= 1;
}

/**
 * checkWord
 * 
 * once the player types a complete row of letters, the player may check to see if their word is correct
 */
function checkWord() {
    let row = document.getElementsByClassName("word-row")[6 - guess_left];
    let word_guess = '';
    let correct_guess = Array.from(correct_word);

    for (const letter of curr_guess) {
        word_guess += letter;
    }

    if (word_guess.length != 5) {
        alert("The Word is too short");
        return;
    }

    if (!ALLWORDS.includes(word_guess)) {
        alert("Not a word!");
        return;
    }

    for (let i = 0; i < 5; i++) {
        let curr_color = '';
        let curr_box = row.children[i];
        let curr_letter = curr_guess[i];
        let curr_position = correct_guess.indexOf(curr_guess[i]);

        if (curr_position !== -1) {
            if (curr_guess[i] === correct_guess[i]) {
                curr_color = '#538D4E';
            } else {
                curr_color = '#BAA13B';
            }

            correct_guess[curr_position] = '#';
        } else {
            curr_color = '#3A3A3C';
        }

        let delay = 1 * i;
        setTimeout(() => {
            //animateCSS(curr_box, 'flipInX');
            curr_box.style.backgroundColor = curr_color;
            shadeKeyBoard(curr_letter, curr_color);
        }, delay)
    }

    if (word_guess === correct_word) {
        alert("You Win! You guessed the correct word!");
        guess_left = 0;
        return;
    } else {
        guess_left -= 1;
        curr_guess = [];
        next_letter = 0;
    }

    if (guess_left === 0) {
        alert("No more guesses left! Game over!");
        alert(`The correct word was: "${correct_word}"`);
    }
}

/**
 * addLetter
 * 
 * this is the most basic function for this game to work.
 * this function will allow players to type letters into the board
 */
function addLetter(key_pressed) {
    // make sure the row has less than 5 letters
    if (next_letter === 5) {
        return;
    }

    key_pressed = key_pressed.toLowerCase();

    let row = document.getElementsByClassName("word-row")[6 - guess_left];
    let box = row.children[next_letter];
    animateCSS(box, "pulse");
    box.textContent = key_pressed;
    box.classList.add("filled-box");
    curr_guess.push(key_pressed);

    next_letter += 1;
}

function shadeKeyBoard (letter, color) {
    for (const c of document.getElementsByClassName("keyboard-button")) {
        if (c.textContent === letter) {
            let prev_color = c.style.backgroundColor;
            if ((prev_color === '#538D4E') || (prev_color === '#BAA13B' && color !== '#538D4E')) {
                return;
            }

            c.style.backgroundColor = color;
            break;
        }
    }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
    node.style.setProperty('--animate-duration', '0.3s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

document.addEventListener("keyup", (e) => {
    // first make sure that there is at least one guess left
    if (guess_left === 0) {
        return;
    }
    
    let key_pressed = String(e.key);
    if (key_pressed === "Backspace" && next_letter !== 0) {
        deleteLetter();
        return;
    }

    if (key_pressed === "Enter") {
        checkWord();
        return;
    }

    let found = key_pressed.match(/[a-z]/gi);
    if (!found || found.length > 1) {
        return;
    } else {
        addLetter(key_pressed);
    }
})

document.getElementById("keyboard").addEventListener("click", (e) => {
    const target = e.target;
    
    if (!target.classList.contains("keyboard-button")) {
        return;
    }
    let key = target.textContent;

    if (key === "DEL") {
        key = "Backspace";
    } else if (key === "ENTER") {
        key = "Enter";
    }

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}));
})

createBoard();