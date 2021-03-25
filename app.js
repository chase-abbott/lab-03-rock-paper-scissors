// import functions and grab DOM elements
import { numberGenerator, didUserWin } from './test/utils.js';

const resultsDiv = document.querySelector('#results-div');
const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const resetSpan = document.querySelector('#reset-span');
const userInput = document.querySelector('input:checked');
const userGuess = userInput.value;

// initialize state
let wins = 0;
let losses = 0;
let total = 0;
let resetNumber = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    total++;

    let computerThrow = numberGenerator(Math.random());

    if (didUserWin(userGuess, computerThrow) === 'win') {
        wins++;
        resultsDiv.textContent = 'You won!';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
    } else if ((didUserWin(userGuess, computerThrow) === 'loss')) {
        losses++;
        resultsDiv.textContent = 'You Lost :(';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
    } else {
        resultsDiv.textContent = "It's a Draw!";
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
    };
})

function reset() {
    resetNumber++;
    wins = 0;
    losses = 0;
    total = 0;
    winsSpan.textContent = 0;
    lossesSpan.textContent = 0;
    drawsSpan.textContent = 0;
    resetSpan.textContent = resetNumber;
}

resetButton.addEventListener('click', reset);
