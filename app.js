// import functions and grab DOM elements
import { numberGenerator } from './test/utils.js';

const resultsDiv = document.querySelector('#results-div');
const winsDiv = document.querySelector('#wins-div');
const lossesDiv = document.querySelector('#losses-div');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');



// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
submit.addEventListener('click', () => {
    total++;
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput.value;
    let computerThrow = numberGenerator(Math.random());
    // console.log(computerThrow);
    // console.log(wins);
    if (userGuess === 'rock' && computerThrow === 'scissors') {
        wins++;
        return;
    }
    if (userGuess === 'rock' && computerThrow === 'paper') return;
    if (userGuess === 'paper' && computerThrow === 'scissors') return;
    if (userGuess === 'paper' && computerThrow === 'rock') {
        wins++;
        return;
    }
    if (userGuess === 'scissors' && computerThrow === 'paper') {
        wins++;
        return;
    }
    if (userGuess === 'scissors' && computerThrow === 'rock') return;
    if (userGuess === computerThrow) return;

})