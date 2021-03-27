// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './test/utils.js';
const scissors = './assets/scissors.png';
const paper = './assets/paper.png';
const rock = './assets/rock.png';

const resultsDiv = document.querySelector('#results-div');
const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const resetSpan = document.querySelector('#reset-span');
const userInput = document.querySelector('input:checked');
const userGuess = userInput.value;
const resultsImage = document.querySelector('#results-image');

// initialize state
let wins = 0;
let losses = 0;
let total = 0;
let resetNumber = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    total++;
    let computerThrow = getRandomThrow(Math.random());
    switch (computerThrow) {
        case 'paper':
            resultsImage.src = paper;
            break;
        case 'rock':
            resultsImage.src = rock;
            break;
        case 'scissors':
            resultsImage.src = scissors;
            break;
        default: null;
    }

    const result = didUserWin(userGuess, computerThrow);

    switch (result) {
        case 'win':
            wins++;
            resultsDiv.textContent = 'You won!';
            resultsDiv.style.backgroundColor = 'green';
            winsSpan.textContent = wins;
            lossesSpan.textContent = losses;
            drawsSpan.textContent = total - wins - losses;
            break;

        case 'loss':
            losses++;
            resultsDiv.textContent = 'You Lost :(';
            resultsDiv.style.backgroundColor = 'red';
            winsSpan.textContent = wins;
            lossesSpan.textContent = losses;
            drawsSpan.textContent = total - wins - losses;
            break;

        case 'draw':
            resultsDiv.textContent = "It's a Draw!";
            resultsDiv.style.backgroundColor = 'yellow';
            winsSpan.textContent = wins;
            lossesSpan.textContent = losses;
            drawsSpan.textContent = total - wins - losses;
            break;
        default: null;
    }
});

function reset() {
    resetNumber++;
    wins = 0;
    losses = 0;
    total = 0;
    winsSpan.textContent = 0;
    lossesSpan.textContent = 0;
    drawsSpan.textContent = 0;
    resetSpan.textContent = resetNumber;
    resultsDiv.display = 'none';
}

resetButton.addEventListener('click', reset);
