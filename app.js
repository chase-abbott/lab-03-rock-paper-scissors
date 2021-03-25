// import functions and grab DOM elements
import { numberGenerator, didUserWin } from './test/utils.js';

const resultsDiv = document.querySelector('#results-div');
const winsDiv = document.querySelector('#wins-div');
const lossesDiv = document.querySelector('#losses-div');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');

// initialize state
let wins = 0;
let losses = 0;
let total = 0;

// set event listeners to update state and DOM
submit.addEventListener('click', () => {
    total++;
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput.value;
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
    }

    console.log(computerThrow, didUserWin(userGuess, computerThrow), wins, losses, total);

})
