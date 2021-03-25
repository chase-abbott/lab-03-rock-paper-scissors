// import functions and grab DOM elements
import { numberGenerator } from './test/utils.js';

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
    console.log(computerThrow);
    console.log(wins);
    if (userGuess === 'rock' && computerThrow === 'scissors') {
        wins++;
        resultsDiv.textContent = 'You won!';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return true;
    }
    if (userGuess === 'rock' && computerThrow === 'paper') {
        losses++;
        resultsDiv.textContent = 'You Lost :(';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return false;
    }
    if (userGuess === 'paper' && computerThrow === 'scissors') {
        losses++
        resultsDiv.textContent = 'You Lost :(';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return false;
    }
    if (userGuess === 'paper' && computerThrow === 'rock') {
        wins++;
        resultsDiv.textContent = 'You won!'
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return true;
    }
    if (userGuess === 'scissors' && computerThrow === 'paper') {
        wins++;
        resultsDiv.textContent = 'You won!'
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return true;
    }
    if (userGuess === 'scissors' && computerThrow === 'rock') {
        losses++
        resultsDiv.textContent = 'You Lost :(';
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return false;
    }
    if (userGuess === computerThrow) {
        resultsDiv.textContent = "It's a Draw!";
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textContent = total - wins - losses;
        return;
    }
})


